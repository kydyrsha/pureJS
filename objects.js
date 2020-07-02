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
