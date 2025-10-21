// Задача: Написати функцію, яка приймає рядок і повертає його у зворотному порядку,
//  при цьому пропускаючи всі цифри.

function reverseWithoutNumbers(str) {
  let arr=str.split("")
  let arrr=[]
  for (let i=0; i<arr.length; i++) {
      if (isNaN(arr[i])) {
        arrr.push(arr[i])
      }
  }
  return arrr.reverse().join("")
}


console.log(reverseWithoutNumbers("hello123world456")); // Виведе: "dlrowolleh"
console.log(reverseWithoutNumbers("abc123xyz"));       // Виведе: "zyxabc"

module.exports = reverseWithoutNumbers;