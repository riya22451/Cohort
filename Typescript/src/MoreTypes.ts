//Forceful type assertion

type Book={
    name:string
}
let bookString='{"name":"Learn TypeScript"}'
let bookObject=JSON.parse(bookString) as Book
console.log(bookObject.name
)
const input=document.getElementById('input') as HTMLInputElement

let value:any
value='chai'
value=[1,2,3]
value.toUpperCase() // not giving any error
let newValue:unknown
newValue='chai'
newValue=[1,2,3]
if(typeof newValue==='string'){
newValue.toUpperCase()
} //need to check type before using methods


try {
    
} catch (error) {
    if(error instanceof Error){
        console.log(error.message)
    }
    console.log('Error',error)
}

const data:unknown='chai aur code'
const strData:string=data as string

type Role="admin"|"user"

function redirectBasedOnRole(role:Role):void{
    if(role==='admin'){
        console.log('Redirect to admin dashboard')
        return
    }
    if(role==='user'){
        console.log('Redirect to user dashboard')
        return
    }
    role;  // never type when some cases are not handled
}
function neverReturn():never{
    while(true){}
}
