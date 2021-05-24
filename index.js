const http = require('http')
const express = require('express')
const cors = require('cors')

var morgan = require('morgan')
morgan.token('body', (req, res) => JSON.stringify(req.body));

const app = express()

app.use(express.json())
app.use(morgan(':method :url :status :res[content-length] :response-time ms  :body'))
app.use(cors())

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

app.get('/api/persons', (req, res) => {
    res.json(persons)
})

app.get('/api/persons/:id', (req, res) => {
    const id = Number(req.params.id) 
    const person = persons.find(person => person.id === id)
    res.json(person)
})

app.get('/info', (req, res) => {
    const date = new Date
    res.end(`Phonebook has info for ${persons.length} people \n${date}`)
})

app.post('/api/persons', (req, res) => {
    
    const body = req.body

    if(!body.name || !body.number) {
        return res.status(400).json({
            error: 'name or number is missing'
        })
    }

    if(persons.find(pers => pers.name === body.name)){
        return res.status(400).json({
            error: 'name must be unique'
        })
    }

    const person = {
        name : body.name,
        number : body.number,
        id : genID() 
    }
    
    persons = persons.concat(person)
    res.json(person)
})

app.delete('/api/persons/:id', (req, res) => {
    const id = Number(req.params.id)
    persons = persons.filter(person => person.id !== id)

    res.status(204).end()
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})