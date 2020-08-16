# Learning Functional Programming with JavaScript ES6+

### Basic JavaScript ES6 Syntax

```
import fs from 'fs';

var x = 5;
const pi = 3.14159;
var anArray = [1, 2, 3, 4];
var anObject = { name: "John Doe", age: 45, likesCoffee: true };

const square = number =>
    number * number;

const xSquare = square(x);

export default square;
```

### Command Line Operations

```
$ mkdir my-directory

$ cd my-directory

$ ls

$ npm install
```

### Object-Oriented Basics

```
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    getOlder() {
        this.age++;
    }

    changeName(newName) {
        this.name = newName;
    }
}
```

## Setting up the project

- Install node JS
- `npm init -y`
- `npm install --save @babel/core @babel/node @babel/preset-env // Install Babel`
- Create a .babelrc file
- `node src/file.js // run node js file`
- `npx babel-node src/myfile.js // run node js with babel`
- `npx babel-node // open REPL in node with babel`
- `npm install --save-dev eslint`
- `npx eslint --init`
- `npm install eslint-plugin-immutable --save-dev`
- `npx eslint .`


# What Is Functional Programming?

Functional programming aims to create solutions that are made up of small self-contained testable units 
of pure functions that help to avoid buggy code.

At its core functional programming is concerned with taking a large number of complex ideas and to organise them in a corherent way thereby making it easy to modify.

The different between functional programming and OOP is the choices they make with regards to organising code.

Functional programming aim to bring in the precision of mathmatical equations into programming in order to avoid bugs.

```
INPUT x ----> FUNCTION f: ----> OUTPUTf(x) // f(x) = x + 1
```

## Functional Programming Solutions

### Object-oriented programming languages
- Java
- C++

### Procedural programming language
- C

## Imperative vs. Declarative

Functional Programming ==> **Declarative** "What?"

Puts more emphasis on what things are as opposed to how to get them

OOP                    ==> **Imperative** "How?"

Modelled on the human way of thinking, in terms of the properties an methods belonging to a thing.

## Core Concepts of Functional Programming

1. Immutability e.g. (unchanging over time or unable to be changed.)
2. Separating function and data e.g. (decoupling functions to the data it receives as input)
3. First-class functions e.g. (passing functions as arguments to other functions, returning them as the values from other functions, and assigning them to variables or storing them in data structures) helps code resuse.

## Immutability
In function programming we don't assign we define. e.g. ( use `const` as opposed to `var` or `let`)

`x = 3` ---> "x is 3"

### Seperation function and data
Allow function to called independently of any objec 

### Pure Functions

Functions with no sense of state that takes an input to produce an outout after having performed some operation on the input. 

### Arrow Functions

```
function myFunction(arg1, arg2) {
  // function body
}

const myOtherFunction = function(arg1, arg2) {
  // function body
};

const add = (x, y) => x + y;

const double = number => number * 2;

const sayHello = () => console.log('Hello');

const getPersonData = () => ({
  name: 'isaac',
  surname: 'babalola',
});
```