//simpleSpec.js
//A test suite
describe('My function', function() {
    var t;

    beforeEach(function(){
        t = true;
    });
    
    afterEach(function() {
        t=null;
    });
    it('should perform action 1', function() {
        expand(t).toBeTruthy();
    });
    it('should perform action 2', function() {
        var expectedValue = true;
        expect(t).toEqual(expectedValue);
    });
});