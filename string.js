// const name = "Sanat"
// const age = 22
//
// function getAge() {
//   return age
// }
// const output = 'Привет, меня зовут ' + name + ' и мне 22 года'
// const output = `Hi, my name is ${name} and I am ${age}`
// console.log(output)
//
// const output = `
//   <div>This is div</div>
// `
// console.log(output);

// const name = 'Sanat'
// console.log(name.length)
// console.log(name.toUpperCase())
// console.log(name.toLowerCase())
// console.log(name.charAt(2)) // position in string
// console.log(name.indexOf('an')) // have we got this string? when it starts
// console.log(name.startsWith('S'))
// console.log(name.endsWith('at'))
// console.log(name.repeat(2))
// const string = '              password      '
// console.log(string.trim()) // delets unnecessary bananas(space)
// console.log(string.trimLeft())
// console.log(string.trimRight())

function logPerson(s, name, age) {
  if (age < 0) {
    age = 'not born yet'
  }
  return `${s[0]}${name}${s[1]}${s[2]}`
}

const personName = 'Sanat'
const personName2 = 'Biga'
const personAge = 22
const personAge2 = -2

const output = logPerson`Name: ${personName}, Age: ${personAge}!`
const output2 = logPerson`Name: ${personName2}, Age: ${personAge2}!`
console.log(output)
console.log(output2)
