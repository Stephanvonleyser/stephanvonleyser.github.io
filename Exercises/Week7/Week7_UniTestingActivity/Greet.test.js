

/**
 *  1- Function called Greet(name) returns greeting
 *  2- Handle null by returning default “Hello there!”.
 *  3- add shouting, if name is all uppercase then return should be uppercase HELLO JOSE
 *  4- Two names as input, if name is array, greet both “Hello, Jose, Pep”. 
 *  5- Handle n names in array “Hello, Alex, Arsene, Jose, Zidane”
 */

const Greet = require('./Greet');

console.log(typeof Greet);

    // 1 Test for greeting a single name
test('should greet a single name', () => {
  expect(Greet('Elizabeth')).toBe('Hello, Elizabeth');
});

    // 2 Test for handling null values
test('should return "Hello there!" when the name is null', () => {
  expect(Greet(null)).toBe('Hello there!');
});

    //3 Test for shouting when the name is all uppercase
test('should shout back when the name is all uppercase', () => {
  expect(Greet('JOSE')).toBe('HELLO JOSE!');
});
    
    // 4 test for handling two names as input
test('should greet two names when an array with two names is passed', () => {
  expect(Greet(['Jose', 'Pep'])).toBe('Hello, Jose, Pep');
});
    
    // 5 Test for handling an arbitrary number of names as input
test('should greet multiple names when an array with multiple names is passed', () => {
  expect(Greet(['Alex', 'Arsene', 'Jose', 'Zidane'])).toBe('Hello, Alex, Arsene, Jose, Zidane');
});



