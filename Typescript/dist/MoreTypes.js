"use strict";
//Forceful type assertion
Object.defineProperty(exports, "__esModule", { value: true });
let bookString = '{"name":"Learn TypeScript"}';
let bookObject = JSON.parse(bookString);
console.log(bookObject.name);
const input = document.getElementById('input');
let value;
value = 'chai';
value = [1, 2, 3];
value.toUpperCase(); // not giving any error
let newValue;
newValue = 'chai';
newValue = [1, 2, 3];
if (typeof newValue === 'string') {
    newValue.toUpperCase();
} //need to check type before using methods
try {
}
catch (error) {
    if (error instanceof Error) {
        console.log(error.message);
    }
    console.log('Error', error);
}
const data = 'chai aur code';
const strData = data;
function redirectBasedOnRole(role) {
    if (role === 'admin') {
        console.log('Redirect to admin dashboard');
        return;
    }
    if (role === 'user') {
        console.log('Redirect to user dashboard');
        return;
    }
    role; // never type when some cases are not handled
}
function neverReturn() {
    while (true) { }
}
//# sourceMappingURL=MoreTypes.js.map