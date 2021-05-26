const mongoose = require('mongoose')

if (process.argv.length<3) {
  console.log('give password as argument')
  process.exit(1)
}

const password = process.argv[2]

const url =
  `mongodb+srv://fullstack:${password}@cluster0.7vqsm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })

const personSchema = new mongoose.Schema({
  name: String,
  number: String
})

const Person = mongoose.model('Person', personSchema)
console.log(process.argv.length)
if (process.argv.length > 3){
  const person = new Person({
    name: process.argv[3],
    number: process.argv[4]
  })

  person.save().then(res => {
    console.log(`added ${person.name} number ${person.number} to phonebook`)
    mongoose.connection.close()
  })
}

if (process.argv.length === 3){
  Person.find({}).then(res => {
    console.log('phonebook')
    res.forEach(per => {
      console.log(per.name, per.number)
    })
    mongoose.connection.close()
  })
}

