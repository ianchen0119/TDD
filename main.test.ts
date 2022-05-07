import porterKata from "./main";

test('Buy a book', () => {
    let instant = new porterKata();
    instant.pushItem();
    let price: number = instant.cauculate();
    expect(price).toBe(100);
  });