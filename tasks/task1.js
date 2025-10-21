// Задача: Написати функцію, яка приймає рядок і замінює всі голосні (a, e, i, o, u, y) 
// на певний символ, наприклад *.

function replaceVowels(str) {
  let vowels="aeoiuyAEOIUY"
  let res=""
  for(let i=0; i<str.length; i++) {
      if (vowels.includes(str[i])) {
          res=res+"*"
      }
      else {
          res=res+str[i]
      }
  }
  return res
}

console.log(replaceVowels("hello world")); // Виведе: "h*ll* w*rld"
console.log(replaceVowels("Javascript"));  // Виведе: "J*v*scr*pt"

module.exports = replaceVowels;