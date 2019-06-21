# Javascript Foundations Assessments

### Without using Google answer the following:

1. List the data types in Javascript. Indicate which are primitives

numbers = primitive
boolean = primitive
strings = primitive
null = primitive
undefined = primitive
objects
symbols

2. What's the difference between =, ==, and === in JavaScript?

= is used to assign values to a variable
== is used for comparison of 2 values but does not have to be strictly equal
=== means strict equality to the 2 values

3. What is the difference between an array's index and length?

An array's index is the actual position of say a number in a loop. (ex: [0, 1, 2, 3] the index of the number 0 is 0 in this case)
An array's length is the full length.. of that particular arrary. (ex: arr.length would pull from the entire array of the above example I gave)

4. What are the three parts of a for loop?

for(i = 0, i < arr.length, i++)

5. What is a function's declaration, argument, and call?

delcaration = name of the function
argument = passing the value of the variable
call = telling the function to run

6. What are the three main steps in saving work to github?

git add .
git commit -m”initial commit”
git push

7. What is the terminal command to move directories?

cd ..
cd <directory name>

8. Do you have a suggestion for a Check In question?

What do you like to do outside of class?

9. What was your favorite topic this week?

The Pig Latin project was fun because we got to tie everything we had learned up until that point together. I enjoyed completing that project and working with the "mob" that I worked with.

10. What was your "A-ha!" moment this week?

During the light bulb challenge, Dimitri and I figured out how to use the same image for the light switch portion and use the "rotate" attribute in CSS in order to make it turn on and off. While we could've used 2 images like we did with the actual light bulbs, that was a fun thing to figure out.

### Stretch: The following questions are potential interview questions. First, try to answer each question on your own then Google the answer to further your knowledge.

1. Look at this Javascript and try to predict, what will the browser's console show?

``` javascript
var text = 'outside'
function logIt(){
    console.log(text)
    var text = 'inside'
}

logIt()
```
the console will read undefined

2. What is JSON? How does it relate to javascript objects?

JSON = Javascript Object Notation

JSON relates to Javascript objects because it is extremely helpful to use JSON in a complex object. When defining multiple charateristics of one object, JSON should be used.

3. Describe a closure, what is it good for and how do you recognize one?

A closure is a function having access to the parent scope, even after the parent function has been closed. A closure makes it possible for a function to have private variables. A closure would come up as () after a function followed by the var name and ().