const cars = ['Audi', 'BMW', 'Mazda']
// const people = [
//   {name: 'Sanat', budget: 3000},
//   {name: 'Sana', budget: 3500},
//   {name: 'Sanata', budget: 2000}
// ]
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

// console.log(cars.includes('Mazda')); // finds element

// const upperCaseCars = cars.map(car => {
//   return car.toUpperCase()
// })

// const pow2 = num => num ** 2
// const sqrt = num => Math.sqrt(num)
// // const pow2Fib = fib.map(pow2).map(sqrt) // or .map(Math.sqrt)
// const pow2Fib = fib.map(pow2)
// // console.log(upperCaseCars);
// console.log(pow2Fib);

const pow2 = num => num ** 2
// const pow2Fib = fib.map(pow2)
// const filteredNumbers = pow2Fib.filter(num => num > 20)
// pow2Fib.filter(num => {
//   return num > 20
// })
// console.log(pow2Fib);
// console.log(filteredNumbers);

const people = [
  {name: 'Sanat', budget: 3000},
  {name: 'Sana', budget: 3500},
  {name: 'Sanata', budget: 2000}
]

const allBudget = people.filter(person => person.budget > 2000).reduce((acc, person) => { // advanced js chaining
  acc += person.budget
  return acc
}, 0)

console.log(allBudget);
