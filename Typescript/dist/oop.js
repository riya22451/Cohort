"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Chai {
    flavor;
    price;
    constructor(flavor, price) {
        this.flavor = flavor;
        this.price = price;
    }
}
const myChai = new Chai("masala", 20);
class ChaiShop {
    flavor = 'Masala';
    secretIngredients = 'Caradamon';
    #balance = 1000; //private using #
    revealSecret() {
        return this.secretIngredients;
    }
    shopName = 'The Chia Shop'; //within class and subclasses
}
class Branch extends ChaiShop {
    getShopName() {
        return this.shopName;
    }
}
const shop = new ChaiShop();
shop.revealSecret();
class ModernChai {
    _flavor = 'ginger';
    get flavor() {
        return this._flavor;
    }
    set flavor(newFlavor) {
        this._flavor = newFlavor;
    }
}
const chaiInstance = new ModernChai();
chaiInstance.flavor = "lemon";
console.log(chaiInstance.flavor);
//# sourceMappingURL=oop.js.map