const Employee = require("../lib/Employee");
const employee = new Employee('Jane', '1', 'Jane@aol.com');


test('creates a new employee object', () => {
    expect(employee.name).toBe('Jane');
    expect(employee.id).toBe('1');
    expect(employee.email).toBe('Jane@aol.com');
});

test('test getName() method', () => {
    expect(employee.getName()).toBe('Jane');
});


test('test getId() method', () => {
    expect(employee.getId()).toBe('1');

});

test('test getEmail() method', () => {
    expect(employee.getEmail()).toBe('Jane@aol.com');

});