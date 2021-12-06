const Manager = require("../lib/manager");

const manager = new Manager('jane', '1', 'jane@aol.com', 'manager', '8605248123');


test('creates a new manager object', () => {
    expect(manager.name).toBe('jane');
    expect(manager.id).toBe('1');
    expect(manager.email).toBe('jane@aol.com');
    expect(manager.office).toBe('8605248123');
});

test('test getName() method', () => {
    expect(manager.getName()).toBe('jane');
});


test('test getId() method', () => {
    expect(manager.getId()).toBe('1');

});

test('test getEmail() method', () => {
    expect(manager.getEmail()).toBe('jane@aol.com');

});

test('test getRole() method', () => {
    expect(manager.getRole()).toBe('Manager');

});

test('test getoffice() method', () => {
    expect(manager.getOffice()).toBe('8605248123');
});