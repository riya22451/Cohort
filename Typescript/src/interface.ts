interface TeaRecipe{
    water:number;
    milk:number
}
class MasalaChai implements TeaRecipe{
    water=100
    milk=50
}
interface CupSize{
    size:"small"|"large" 
    // static values k liye interface use kr skte h
}

class Chai implements CupSize{
    size:'small'|'large'='small'
}

interface Response{
    ok:boolean
//union type does not go in class
}
class myRes implements Response{
    ok:boolean=true
}

type TeaType="green"|"black"|"herbal"
function orderChai(t:TeaType){
    console.log(`You have ordered ${t} tea`)
}