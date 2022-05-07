import porterKata from "./main";
import { book } from "./main";

test('Buy a book', () => {
    let instant = new porterKata();
    let hp1 :book = {name: "hp1", price: 100}
    instant.pushItem(hp1);
    let price: number = instant.cauculate();
    expect(price).toBe(100);
});

test('Buy 2 books', () => {
    let instant = new porterKata();
    let hp1 :book = {name: "hp1", price: 100}
    let hp2 :book = {name: "hp2", price: 100}
    instant.pushItem(hp1);
    instant.pushItem(hp2);
    let price: number = instant.cauculate();
    expect(price).toBe(190);
});