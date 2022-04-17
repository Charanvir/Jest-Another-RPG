const Potion = require("../lib/Potion.js")

test('creates a health potion object', () => {
    // this will be used to create new Potion object
    const potion = new Potion('health');

    expect(potion.name).toBe('health');
    //expect.any methods takes a constructor as an argument. since it is taking any number, the test will be more broad instead of fixated on a range of numbers
    expect(potion.value).toEqual(expect.any(Number))
})

test('creates a random potion object', () => {
    const potion = new Potion();

    expect(potion.name).toEqual(expect.any(String));
    expect(potion.name.length).toBeGreaterThan(0)
    expect(potion.value).toEqual(expect.any(Number))
})