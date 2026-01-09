"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MasalaChai = {
    flavor: "masala",
    price: 20
};
const machine = {
    start() {
        console.log('Machine started');
    },
    stop() {
        console.log('Machine stopped');
    }
};
const ratings = {
    masala: 5,
    ginger: 4
};
//generics
function wrapInArray(item) {
    return [item];
}
wrapInArray("masala");
wrapInArray(20);
function Pair(first, second) {
    return [first, second];
}
console.log(Pair(1, "MASALA"));
//# sourceMappingURL=interfaceAndGenerics.js.map