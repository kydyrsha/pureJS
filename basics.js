// // // Операторы
// // const courseStatus = 'fail' // ready, fail, pending
// //
// // if (courseStatus === 'ready') {
// //   console.log('Курс уже готов и его можно проходить')
// // } else if (courseStatus === 'pending') {
// //   console.log('Курс пока находится в процессе разработки')
// // } else {
// //   console.log('Курс брлбрлм...сломано')
// // }
// //
// const isReady = true
// //
// // if (isReady) {
// //   console.log('I am ready')
// // } else {
// //   console.log('I am not ready')
// // }
//
// // Тернарный оператор
// isReady ? console.log('I am ready') : console.log('Vse')


// Логические операторы

// Оператор И
// true && true --> true
// false && true --> false
// true && false --> false
// false && false --> false

// Оператор ИЛИ
// true || true --> true
// false || true --> true
// true || false --> true
// false || false --> false


// Функции

// function calculateAge(year) {
//   return 2020 - year
// }
//
// // console.log(calculateAge(1993))
// // console.log(calculateAge(1997))
// // console.log(calculateAge(1990))
//
// function logInfoAbout (name, year) {
//   const age = calculateAge(year)
//
//   if (age > 0) {
//     console.log('Человек по имени ' + name + ' takogo возрастa ' + age)
//   } else {
//     console.log('Voobwe-to ewe net' + age)
//   }
//
// }
//
// logInfoAbout('Sanat',1997)


// Массивы

// const cars = ['Mazda', 'Audi', 'BMW']
// console.log(cars)
// console.log(cars[0])
// cars[0]= 'mercedes-benz'

// Циклы
//
// const cars = ['Mazda', 'Audi', 'BMW']
//
// // for (let i = 0; i < cars.length; i++) {
// //   const car = cars[i]
// //   console.log(car)
// // }
//
// for (let car of cars) {
//   console.log(car)
// }

// Объекты

// const person = {
//   firstName: 'Sanat',
//   lastName: 'Kydyrsha',
//   year: 1997,
//   languages: ['Ru','Kz', 'En'],
//   single: true,
//   greet: function () {
//     console.log('hello who is reading it')
//   }
// }
//
// console.log(person.year)
// person.single = false;
// person.greet()
// console.log(person)
