function greet(name: string): string {
    return `Hello, ${name}!`;
}
console.log(greet("world"))
// Types Inference  
let username='hello'
username='hi'

// Types Annotation
let age:number=40


//Union
let apiStatus:'pending'|'accepted' | 'rejected'='pending'
apiStatus='accepted'
