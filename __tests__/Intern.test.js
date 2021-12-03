const Intern = require("../lib/Intern");

const intern = new Intern('jane', '1', 'jane@aol.com', 'intern', 'BU');


test('creates a new intern object', () => {
    expect(intern.name).toBe('jane');
    expect(intern.id).toBe('1');
    expect(intern.email).toBe('jane@aol.com');
    expect(intern.School).toBe('BU');
});

test('test getName() method', () => {
    expect(intern.getName()).toBe('jane');
});


test('test getId() method', () => {
    expect(intern.getId()).toBe('1');

});

test('test getEmail() method', () => {
    expect(intern.getEmail()).toBe('jane@aol.com');

});

test('test getRole() method', () => {
    expect(intern.getRole()).toBe('Intern');

});

test('test getSchool() method', () => {
    expect(intern.getSchool()).toBe('BU');
});