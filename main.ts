export interface book {
    name :string;
    price: number;
}

interface cashier {
    shoppingList: book[];
    cauculate(): number;
    pushItem(newItem :book): boolean;
}

class porterKata implements cashier {
    shoppingList: book[];
    constructor(){
        console.log("Porter Kata!");
        this.shoppingList = [];
    }

    cauculate(): number {
        let price = 0;
        this.shoppingList.map((i) => {
            price += i.price;
        })
        return price;
    }

    pushItem(newItem: book): boolean {
        this.shoppingList.push(newItem);
        return true;
    }
}

export default porterKata;