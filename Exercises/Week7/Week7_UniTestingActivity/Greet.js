
/**
 *  1- Function called Greet(name) returns greeting
 *  2- Handle null by returning default “Hello there!”.
 *  3- add shouting, if name is all uppercase then return should be uppercase HELLO JOSE
 *  4- Two names as input, if name is array, greet both “Hello, Jose, Pep”. 
 *  5- Handle n names in array “Hello, Alex, Arsene, Jose, Zidane”
 */


function Greet(name) {
    if (!name) {
      return 'Hello there!';
    }
  
    const isArray = Array.isArray(name);
    const names = isArray ? name : [name];
    const isShouting = names.some(name => name === name.toUpperCase());
  
    const greeting = names.join(', ');
  
    if (isShouting) {
      return `HELLO ${greeting.toUpperCase()}!`;
    }
  
    return `Hello, ${greeting}`;
  }

  module.exports = Greet;