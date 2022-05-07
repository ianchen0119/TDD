interface book {
    name :string;
    price: number;
}

interface cashier {
    shoppingList: book[];
    cauculate(): number;
    pushItem(): boolean;
}

class porterKata implements cashier {
    shoppingList: book[];
    constructor(){
        console.log("Porter Kata!");
        this.shoppingList = [];
    }

    cauculate(): number {
        return 0;
    }

    pushItem(): boolean {
        return true;
    }
}

export default porterKata;