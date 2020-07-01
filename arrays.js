const cars = ['Audi', 'BMW', 'Mazda']
const people = [
  {name: 'Sanat', budget: 3000},
  {name: 'Sana', budget: 3500},
  {name: 'Sanata', budget: 2000}
]
const fib = [1, 1, 2, 3, 5, 8, 13]

// cars.push('Infinity') // adds item in the end of array | method
//
// cars.unshift('Renault') // adds item in the beginning
// cars.shift() // reverse
//
// cars.reverse() // reversing of array
// const firstItem = cars.shift() // if we will work the first item we can do it like this | however we need to remove it from array
// console.log(cars);
// cars[index] = 'Porsche'
// console.log(cars);

// let findedPerson
// for (const person of people) {
//   console.log(person)
//   if (person.budget === 3500) {
//     findedPerson = person
//   }
// }
// console.log(findedPerson);

// way to replace something in the array
// const index = cars.indexOf('BMW') | better works with strings, numbers and etc (primitive)

// const index = people.findIndex(function(person) {  // with complex arrays
//   return person.budget === 3500
// })
// console.log(people[index]);

// const person = people.find(person => person.budget === 3500) // лямбда функция
// console.log(person);
// Task 1
// const text = 'Hi, this is Javascript'
// const reverseText = text.split(',').reverse()
// console.log(reverseText);
