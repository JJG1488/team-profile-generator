const Employee = require('../lib/Employee.js')

describe('Employee', () => {

    describe('Initialize New Employee', () => {

        it('should return new Employee', () => {
            const obj = new Employee();
            expect(obj).toEqual(new Employee())
        });

    })

    describe('Validate Name Was Entered', () => {

        it('should validate the name parameter', ()=>{
            const obj = new Employee('James', 0, 'email');
            expect(obj.name).toEqual('James');
            expect(obj.id).toEqual(0);
            expect(obj.email).toEqual('email')
        })

    })

    describe('Check methods and properties', ()=>{

        it('should check that these method and properties are present', ()=>{
            const obj = new Employee('James', 123, 'email');
            expect(obj.getId()).toEqual(obj.id)
            expect(obj.getName()).toEqual(obj.name)
            expect(obj.getEmail()).toEqual(obj.email)
            expect(obj.getRole()).toEqual(obj)
        })
    })


})