const http = require('http')
const express = require('express')
const cors = require('cors')

require('dotenv').config()

var morgan = require('morgan')
morgan.token('body', (req, res) => JSON.stringify(req.body));

const app = express()
const Person = require('./models/person')
const { response } = require('express')

app.use(express.json())
app.use(morgan(':method :url :status :res[content-length] :response-time ms  :body'))
app.use(cors())
app.use(express.static('build'))

const genID = () => {
    return Math.floor(Math.random() * 1000)

}

let persons = [
    { 
        "name": "Arto Hellas", 
        "number": "040-123456",
        "id": 1
      },
      { 
        "name": "Ada Lovelace", 
        "number": "39-44-5323523",
        "id": 2
      },
      { 
        "name": "Dan Abramov", 
        "number": "12-43-234345",
        "id": 3
      },
      { 
        "name": "Mary Poppendieck", 
        "number": "39-23-6423122",
        "id": 4
      }
]

app.get('/api/persons', (req, response, next) => {
    Person.find({})
        .then(persons => {
            response.json(persons)
        })
        .catch(error => next(error))
})

app.get('/api/persons/:id', (req, response) => {
  Person.findById(req.params.id)
  .then(person => {
    response.json(person)
  })

    //const id = Number(req.params.id) 
    //const person = persons.find(person => person.id === id)
    //res.json(person)
})

app.get('/info', (req, response) => {
    const date = new Date
    Person.find({})
    .then(persons => {
      response.end(`Phonebook has info for ${persons.length} people \n${date}`)
    })
    //res.end(`Phonebook has info for ${persons.length} people \n${date}`)
})

app.post('/api/persons', (req, response, next) => {
    
    const body = req.body

    if(body.name === undefined) {
        return response.status(400).json({
            error: 'name or number is missing'
        })
    }

    if(persons.find(pers => pers.name === body.name)){
        return response.status(400).json({
            error: 'name must be unique'
        })
    }

    const person = new Person({
        name : body.name,
        number : body.number        
    })
    person.save().then(savedPerson => {
      response.json(savedPerson)
    })
    .catch(error => next(error))
    
})

app.delete('/api/persons/:id', (req, response, next) => {
    Person.findByIdAndRemove(req.params.id)
    .then(result => {
      response.status(204).end()
    })
    .catch(error => next(error))
})


app.put('/api/persons/:id', (req, response, next) => {
    const body = req.body
  
    const person = {
      name: body.name,
      number: body.number,
    }
  
    Person.findByIdAndUpdate(req.params.id, person, { new: true })
      .then(updatedPerson => {
        response.json(updatedPerson)
      })
      .catch(error => next(error))
  })

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})

const errorHandler = (error, req, res, next) => {
    console.error(error.message)
  
    if (error.name === 'CastError') {
      return response.status(400).send({ error: 'malformatted id' })
    } else if (error.name === 'ValidationError') {
      console.log(response)
      return response.status(400).json({error : error.message})
    }
  
    next(error)
  }
  app.use(errorHandler)
