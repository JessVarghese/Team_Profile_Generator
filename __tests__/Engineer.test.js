const Engineer = require("../lib/Engineer");
const engineer = new Engineer('bob', '2', 'bob@aol.com');


test('creates a new engineer object', () => {
    expect(engineer.name).toBe('bob');
    expect(engineer.id).toBe('2');
    expect(engineer.email).toBe('bob@aol.com');
});

test('test getName() method', () => {
    expect(engineer.getName()).toBe('bob');
});


test('test getId() method', () => {
    expect(engineer.getId()).toBe('2');

});

test('test getEmail() method', () => {
    expect(engineer.getEmail()).toBe('bob@aol.com');

});

test('test getGithub() method', () => {
    expect(engineer.getGithub()).toBe('https://github.com/oh-my-fish');
});