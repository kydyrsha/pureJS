// functions
// function declaration - расположение фукнции не имеет значения
// function greet(name) {
//   console.log('Hi - ', name)
// }

// function expression - расположении функции имеет значение, FunctionExpression - объявление фукнции в переменной
// const greet2 = function greet2(name) {
//   console.log('Hi2 - ', name);
// }

// greet('Sanat')
// greet2('Sana')

// console.log(typeof greet) // tyoe function
// console.dir(greet)

// anonymus functions
// let counter = 1
// const interval = setInterval(function() {
//   if (counter === 5) {
//     clearInterval(interval)
//   } else {
//     console.log(++counter)
//   }
// },1000)
//setTimeOut delay

// Стрелочные функции
// function greet(name) {
//   console.log('Hi - ', name)
// }

const arrow = (name) => {
  console.log('Hi - ', name)
}

arrow('Sanat')

// const pow2 = num => {
//   return num ** 2
// }

const pow2 = num => num ** 2 // if we have one option
console.log(pow2(5));

// Парамерты по умолчанию
const sum = (a,b) => a + b // a = 40, b = 30 -- we can declare default value
console.log(sum(323,33));

function sumAll(...all) {
  console.log(all)
  let result = 0
  for (let num of all) {
    result += num
  }
  return result
}

const res = sumAll(1,2,2,3,3,5)
console.log(res)



// ЗАМЫКАНИЕ !!!!

function createMember(name) {
  return function(lastName) {
    console.log(name + lastName)
  }
}

const logWithLastName = createMember('Sanat')
console.log(logWithLastName(' Kydyrsha'))
