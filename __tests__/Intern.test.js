const Intern = require('../lib/Intern.js');

describe('Intern', () => {

    describe('Initialize Intern', () => {
        it('should create a new Intern Instance', () => {
            const obj = new Intern();
            expect(obj).toEqual(new Intern());
        })
    })

    describe('Validates user input', () => {
        it('should validate the parameters', () => {
            const obj = new Intern('James', 1234, 'email', 'role', 'school');
            expect(obj.name).toEqual('James');
            expect(obj.id).toEqual(1234);
            expect(obj.email).toEqual('email');
            expect(obj.role).toEqual('role');
            expect(obj.school).toEqual('school');
        })
    })
})