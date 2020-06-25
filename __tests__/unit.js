const shortestSub = require("../substringquestion.js");


test('Cat test', () => {
    let text = "My cat was missing today. I hope she comes back. She was chased by the dog next door. I love my cat"
    let words = ["cat", "dog", "chased"]
    expect(shortestSub.shortestSub(text, words)).toBe("chased by the dog next door. I love my cat");
  });
test('World test', () => {
    let text = "The world is here. this is a life full of ups and downs. life is world"
    let words = ["life", "ups", "is", "world"]
    expect(shortestSub.shortestSub(text, words)).toBe("ups and downs. life is world");
  });
  test('Error test', () => {
    let text = "The world is here. this is a life full of ups and downs. life is world"
    let words = ["Ooga","life", "ups", "is", "world"]
    expect(shortestSub.shortestSub(text, words)).toBe(-1);
  });
  test('Error2 test', () => {
    let text = "The world"
    let words = ["Ooga","life", "ups", "is", "world"]
    expect(shortestSub.shortestSub(text, words)).toBe(-1);
  });