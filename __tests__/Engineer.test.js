const Engineer = require('../lib/Engineer')

describe('Engineer', () => {
    describe('Initialize new Engineer', () => {
        it('should return a new Engineer', () => {
        const obj = new Engineer();
        expect(obj).toEqual(new Engineer());
    })

})

describe('Validate user input', () => {
    it('should the parameters have values', () => {
        const obj = new Engineer('James', 1234, 'email', '@JJG1488', 'role');
        expect(obj.name).toEqual('James')
        expect(obj.id).toEqual(1234)
        expect(obj.email).toEqual('email')
        expect(obj.github).toEqual('@JJG1488')
        expect(obj.role).toEqual('role')
    })
})
})