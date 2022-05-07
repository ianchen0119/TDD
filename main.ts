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
        let map: Map<string, number> = new Map();
        let price: number = 0;
        let counter: number = 0;
        this.shoppingList.map((i) => {
            if (map.get(i.name)) {
                let oriValue:any = map.get(i.name);
                map.set(i.name, oriValue + 1);
            } else {
                map.set(i.name, 1);
                counter++;
            }
            price += i.price;
        })

        switch (counter) {
            case 2:
                price = price * 0.95;
                break;
            case 3:
                price = price * 0.9;
                break;
            default:
                price;
        }

        return price;
    }

    pushItem(newItem: book): boolean {
        this.shoppingList.push(newItem);
        return true;
    }
}

export default porterKata;