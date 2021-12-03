const Engineer = require("../lib/Engineer");

const engineer = new Engineer('jane', '1', 'jane@aol.com', 'https://github.com/oh-my-fish');


test('creates a new engineer object', () => {
    expect(engineer.name).toBe('jane');
    expect(engineer.id).toBe('1');
    expect(engineer.email).toBe('jane@aol.com');
});

test('test getName() method', () => {
    expect(engineer.getName()).toBe('jane');
});


test('test getId() method', () => {
    expect(engineer.getId()).toBe('1');

});

test('test getEmail() method', () => {
    expect(engineer.getEmail()).toBe('jane@aol.com');

});

test('test getGithub() method', () => {
    expect(engineer.getGithub()).toBe('https://github.com/oh-my-fish');
});