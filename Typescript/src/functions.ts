function serve(msg? : string){
    if(msg){
        return `Serve ${msg}`
    }
    return 'no message is there'
}
function orderChai(size:"small" | "medium" | "large" | number){
    if(size=="small"){
        return `small cutting chai...`
    }
    if(size=='medium' || size=='large'){
        return `make extra chai`
    }
    return `chai order #${size}`
}
console.log(orderChai(40))

class KulhadChai{
    serve(){
        return `Serving Kulhad Chai`
    }
}
class Cutting{
    serve(){
        return `Serving Cutting Chai`
    }
}

function serveChai(chai:KulhadChai|Cutting){
    if(chai instanceof KulhadChai){
        return chai.serve()
    }
}

type ChaiOrder={
    type:String
    sugar:number
}
function isChaiOrder(obj:any):obj is ChaiOrder{
    return(
        typeof obj==='object' &&
        obj!=null &&
        typeof obj.type==="string" && typeof obj.sugar=='number'
    )
}

function serveOrder(chai:ChaiOrder|String){
    if(isChaiOrder(chai)){
        return `Serving ${chai.type} with ${chai.sugar} sugar`
    }
    return `Serve custom chai ${chai}`
}

type MasalaChai={
    type:"masala",
    spiceLevel:number
}
type Chai=MasalaChai| ChaiOrder