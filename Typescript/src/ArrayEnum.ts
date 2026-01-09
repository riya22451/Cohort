const chaiTypes:string[]=["Masala","ginger"]

const rating:Array<number>=[5,4,4,3,2]

type Chai={
    name:string,
    price:number
}
const menu:Array<Chai>=[ //Array of objects
    {name:"masala",price:20},
    {name:"ginger",price:15}
]

const cities: readonly string[]=["Delhi","Mumbai"] // readonly array
// cities.push("Bangalore") // error because it is readonly

const tables:number[][]=[
    [1,2,3],
    [4,5,6]
]

let chaiType:[string,number,boolean] //tuple
chaiType=["masala",20,true]

const chaiTypes1:[name:string,price:number,isHot:boolean]=["ginger",15,false] // tuple with named elements


enum Size{
    SMALL,
    MEDIUM,
    LARGE
}
const size=Size.MEDIUM

enum Status{
    PENDING=100, //automatic numbering from 100
    SERVED,
    CANCELED
}