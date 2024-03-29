// Javascript Foundations Assessments

// 1. Write an anonymous function that takes one argument of type number and decides if that number is evenly divisble by three or not. If it is, print the number and "is divisible by three" or, print the number and "is not divisble by three".

function byThree (number) {
        if (number % 3 === 0){
            return number + " is divisble by three"
        } else {
            return number + " is not divisble by three"
        }
    }
    console.log(byThree(3627))

// 2. Write an object called helloMe. Include your first_name, last_name and at least two other properties of you. Write a function that returns a description of you.

var helloMe = {
    first_name: "Jared",
    last_name: "Lemke",
    age: 28,
    city: "Seattle",
  myInfo: function(){
    return `My name is ${this.first_name} ${this.last_name}, I'm ${this.age} years old and I'm from ${this.city}`
  }
}
    console.log(helloMe.myInfo())
    
// 3. Create an array of 5 grocery items. Write a function that returns the first, middle, and last item as a string.

var groceriesArr = ["apples", "bananas", "potatoes", "burgers", "chicken"]

newGroceries = (arr) => {
    let newArr = []
    for(let i = 0; i < arr.length; i++){
        if(i % 2 === 0){
            newArr.push(arr[i])
        }
    }
     return newArr.join(", ")
}
    
console.log(newGroceries(groceriesArr))

// 4. Write a function called alphabetSoup that takes an argument of "str" and return a string with the letters in alphabetical order (ie. learn becomes aelnr). Assume numbers and punctuation symbols will not be included in the parameter.

alphabetSoup = (str) => {
    let newStr = str.split('')
    return newStr2 = newStr.sort().join('')
}
console.log(alphabetSoup('learn'))

// 5. Given the arrays below, write a function animalNums that uses a for loop to print one value from each array concatenated together.

var nums = [9, 5, 88, 2, 5, 42, 57]

var nouns = ["ducks", "elephants", "pangolin", "rhinoceros", "giraffes", "penguins", "llamas"]

animalNums = (arr1,arr2) => {
    let newArr = []
    for(let i = 0; i < arr1.length; i++){
    newArr.push(`${arr1[i]} ${arr2[i]}`)
    }
    return newArr.join(', ')
}
console.log(animalNums(nums, nouns))

// output should be: "9 ducks", etc

//6. Create an array of 5 numbers. Write a function that loops through the array and returns a new array of the numbers multiplied by 5.

var numbers = [34, 7, 17, 44, 23]

newNumbers = (arr) => {
    let newArr = []
    for(let i = 0; i < arr.length; i++){
        newArr[i] = arr[i] * 5
    }
    return newArr
}
    console.log(newNumbers(numbers))