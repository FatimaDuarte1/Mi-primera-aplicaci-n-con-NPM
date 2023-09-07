const sumar = require('../index');
const assert = require('assert');


describe("Probar la suma de dos números", ()=>{
    //Afirmar que cinco mas cinco son 10
    it("Cinco mas cinco es 10", ()=>{
        assert.equal(10, sumar(5,5));
    });

    //Afirmamos que cinco mas cinco no son 55
    it("Cinco mas cinco no son 55", ()=>{
        assert.notEqual(55, sumar(5,5));
    });

});