interface Chai{
    flavor:string,
    price:number
}

const MasalaChai:Chai={
    flavor:"masala",
    price:20
}

interface teacmachine{
    start():void,
    stop():void
}
const machine:teacmachine={
    start(){
        console.log('Machine started')
    },
    stop(){
        console.log('Machine stopped')
    }
}

interface ChaiRating{
    [flavor:string]:number
}
const ratings:ChaiRating={
    masala:5,
    ginger:4
}

//generics

function wrapInArray<T>(item:T):T[]{
    return [item]
}

wrapInArray("masala")
wrapInArray(20)

function Pair<A,B>(first:A,second:B):[A,B]{
    return [first,second]
}
console.log(Pair(1,"MASALA"))

interface ApiResponse<T>{
    status:number,
    data:T
}
const response:ApiResponse<{name:string,age:number}>={
    status:200,
    data:{
        name:"chai",
        age:3
    }
}