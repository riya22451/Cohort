class Chai{
    flavor:string;
    price:number;
 constructor(flavor:string,price:number){
    this.flavor=flavor;
    this.price=price;
 }

}
const myChai=new Chai("masala",20)

class ChaiShop{
    public flavor:string='Masala'
    private secretIngredients='Caradamon'
    #balance:number=1000  //private using #
    revealSecret(){
        return this.secretIngredients
    }
    protected shopName='The Chia Shop'  //within class and subclasses
}

class Branch extends ChaiShop{
    getShopName(){
        return this.shopName
    }
}
const shop=new ChaiShop()
shop.revealSecret()

class ModernChai{
    private _flavor:string='ginger'
    get flavor(){
        return this._flavor
    }
    set flavor(newFlavor:string){
        this._flavor=newFlavor
    }
}
const chaiInstance=new ModernChai();
chaiInstance.flavor="lemon"
console.log(chaiInstance.flavor)


class StaticChai{
    static shopName:string='Static Chai Shop'
    constructor(public flavor:string){}
}
console.log(StaticChai.shopName)



abstract class Beverage{  // abstract class
    
    abstract make():void
}
class LemonTea extends Beverage{
    make(){
        console.log("Making Lemon Tea")
    }
}
