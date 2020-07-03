const person = {
  name: 'Sanat',
  age: 22,
  isProgrammer: true,
  languages: ['ru', 'en', 'kz'],
  // 'complex key': 'complex value',
  greet: function() {

  }, //or
  greet() {
    console.log('greet from person') // this way better
  },
  info() {
    console.log('this', this);
    console.info('Information about', this.name)
  }
}

// console.log(person.name)
// console.log(person['age'])
// console.log(person['complex key'])
// console.log(person)
// person.greet()
//
// person.age++
// person.languages.push('by')
// delete person['complex key'] // how to delete
// console.log(person.age);

// not right way
// const name = person.name
// const age = person.age
// const languages = person.languages

// this way is better
// const {name, age, languages} = person
//
// console.log(name, age, languages)

// for (let key in person) {
//   if (person.hasOwnProperty(key)) {
//     console.log('key:', key)
//     console.log('value:', person[key])
//   }
// }

// Object.keys(person).forEach((key) => { // SHOULD DO LIKE THIS
//   console.log('key:', key)
//   console.log('value:', person[key])
// })


// Context
// person.info()

const logger = {
  keys() {
    console.log('Object Keys:', Object.keys(this))
  },

  keysAndValues() {
    // Object.keys(this).forEach(key => { // стрелочная функция не создает собственный контекст
    //   console.log(`"${key}": ${this[key]}`)
    // })
    // const self = this

    Object.keys(this).forEach(function(key)  { // из-за function имеется собственный контекст
      console.log(`"${key}": ${this[key]}`)
    }.bind(this))
  },

  withParams(top = false, between = false, bottom = false) {
    if (top) {
      console.log('------------Start------------')
    }
    Object.keys(this).forEach((key, index, array) => { // стрелочная функция не создает собственный контекст
      console.log(`"${key}": ${this[key]}`)
      if (between && index !== array.length - 1) {
        console.log('-------------')
      }
    })
    if (bottom) {
      console.log('--------End---------------')
    }
  }
}

// const bound = logger.keys.bind(logger)
// bound()
// logger.keys.call(person)
logger.withParams.call(person, true, true, true) // независимое количество параметра
logger.withParams.apply(person, [true, true, true]) // два параматера, второй всегда массив
