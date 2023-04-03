/*** Import of our function (which we assume we will create in the future)
 * to be tested from the app.js file to our test file.
 */

const removeSNames = require('./app');
// our Jest method containing multiple test that define our objetvie
describe('removeSName', ()=> {

    //Test 1 - names with 'S' should not be present in the resultant array
    it('should remove all S names' , () => {
        const names = ['Apple', 'Starwberry', 'Star fruit'];
        expect(removeSNames(names)).not.toContain('Strawberry');
        expect(removeSNames(names)).not.toContain('Star fruit');
    });

    //Test 2 - names whitout 'S' should remain untouched
    it('should not remove other names' , () => {
        const names = ['Apple', 'Starwberry', 'PineApple'];
        expect(removeSNames(names)).toContain('Apple');
        expect(removeSNames(names)).toContain('PineApple');
    });

    //Test 3 - names whit 'S' or 's' should not be present 
    it('should mind the case of S and s' , () => {
        const names = ['Apple', 'Starwberry', 'Star fruit', 'strawberry'];
        expect(removeSNames(names)).not.toContain('Strawberry');
        expect(removeSNames(names)).not.toContain('strawberry');
    });

})