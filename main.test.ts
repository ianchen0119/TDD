import porterKata from "./main";
import { book } from "./main";

(() => {
    let hp1 :book = {name: "hp1", price: 100};
    let hp2 :book = {name: "hp2", price: 100};
    let hp3 :book = {name: "hp3", price: 100};
    let hp4 :book = {name: "hp4", price: 100};
    let hp5 :book = {name: "hp5", price: 100};
    let price: number = 0;

    test('Buy a book', () => {
        let instant = new porterKata();
        instant.pushItem(hp1);
        price = instant.cauculate();
        expect(price).toBe(100);
    });
    
    test('Buy 2 books', () => {
        let instant = new porterKata();
        instant.pushItem(hp1);
        instant.pushItem(hp2);
        price = instant.cauculate();
        expect(price).toBe(190);
    });

    test('Buy 3 books', () => {
        let instant = new porterKata();
        instant.pushItem(hp1);
        instant.pushItem(hp2);
        instant.pushItem(hp3);
        price = instant.cauculate();
        expect(price).toBe(270);
    });

    test('Buy 4 books', () => {
        let instant = new porterKata();
        instant.pushItem(hp1);
        instant.pushItem(hp2);
        instant.pushItem(hp3);
        instant.pushItem(hp4);
        price = instant.cauculate();
        expect(price).toBe(320);
    });

    test('Buy 5 books', () => {
        let instant = new porterKata();
        instant.pushItem(hp1);
        instant.pushItem(hp2);
        instant.pushItem(hp3);
        instant.pushItem(hp4);
        instant.pushItem(hp5);
        price = instant.cauculate();
        expect(price).toBe(375);
    });

    test('Buy 5 books - 2', () => {
        let instant = new porterKata();
        instant.pushItem(hp1);
        instant.pushItem(hp2);
        instant.pushItem(hp3);
        instant.pushItem(hp4);
        instant.pushItem(hp4);
        price = instant.cauculate();
        expect(price).toBe(400);
    });
})();