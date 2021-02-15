const Manager = require('../lib/Manager.js');

describe('Manager', () => {

    describe('Initialize new Manager', () => {
        it('should create a new instance of a Manager', () => {
            const obj = new Manager();
            expect(obj).toEqual(new Manager());
        })
    })

    describe('Validates user input', () => {
        it('should check parameters', () => {
            const obj = new Manager('name', 1234, 'email', 'role', 1234567);
            expect(obj.name).toEqual('name');
            expect(obj.id).toEqual(1234);
            expect(obj.email).toEqual('email');
            expect(obj.role).toEqual('role');
            expect(obj.officeNumber).toEqual(1234567);
        })
    })
})