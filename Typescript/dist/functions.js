"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function serve(msg) {
    if (msg) {
        return `Serve ${msg}`;
    }
    return 'no message is there';
}
function orderChai(size) {
    if (size == "small") {
        return `small cutting chai...`;
    }
    if (size == 'medium' || size == 'large') {
        return `make extra chai`;
    }
    return `chai order #${size}`;
}
console.log(orderChai(40));
class KulhadChai {
    serve() {
        return `Serving Kulhad Chai`;
    }
}
class Cutting {
    serve() {
        return `Serving Cutting Chai`;
    }
}
function serveChai(chai) {
    if (chai instanceof KulhadChai) {
        return chai.serve();
    }
}
function isChaiOrder(obj) {
    return (typeof obj === 'object' &&
        obj != null &&
        typeof obj.type === "string" && typeof obj.sugar == 'number');
}
function serveOrder(chai) {
    if (isChaiOrder(chai)) {
        return `Serving ${chai.type} with ${chai.sugar} sugar`;
    }
    return `Serve custom chai ${chai}`;
}
function orderChaiType(type) {
}
function prepareChai(size = "medium") {
}
//# sourceMappingURL=functions.js.map