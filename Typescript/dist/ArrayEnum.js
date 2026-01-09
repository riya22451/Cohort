"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chaiTypes = ["Masala", "ginger"];
const rating = [5, 4, 4, 3, 2];
const menu = [
    { name: "masala", price: 20 },
    { name: "ginger", price: 15 }
];
const cities = ["Delhi", "Mumbai"]; // readonly array
// cities.push("Bangalore") // error because it is readonly
const tables = [
    [1, 2, 3],
    [4, 5, 6]
];
let chaiType; //tuple
chaiType = ["masala", 20, true];
const chaiTypes1 = ["ginger", 15, false]; // tuple with named elements
var Size;
(function (Size) {
    Size[Size["SMALL"] = 0] = "SMALL";
    Size[Size["MEDIUM"] = 1] = "MEDIUM";
    Size[Size["LARGE"] = 2] = "LARGE";
})(Size || (Size = {}));
const size = Size.MEDIUM;
var Status;
(function (Status) {
    Status[Status["PENDING"] = 100] = "PENDING";
    Status[Status["SERVED"] = 101] = "SERVED";
    Status[Status["CANCELED"] = 102] = "CANCELED";
})(Status || (Status = {}));
//# sourceMappingURL=ArrayEnum.js.map