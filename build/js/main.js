var isFetching = true;
var isLoading = false;
var int = 42;
var message = 'hello ts';
var numberArray = [1, 1, 2, 3, 5, 8, 13];
var numberArray2 = [1, 1, 2, 3, 5, 8, 13];
var words = ['hello', 'world'];
var contact = ['alex', 112312124];
var variable = 42;
variable = 'hi';
console.log(variable);
// function
function sayMyName(name) {
    console.log(name);
}
console.log('alex');
function throwErr(msg) {
    throw new Error(msg);
}
var login = 'admin';
var id1 = 12;
var rect1 = {
    id: '1234',
    size: {
        width: 20,
        height: 30
    },
    color: 'ccc'
};
// function
function add(a, b) {
    return a + b;
}
function toUpperCase(str) {
    return str.trim().toUpperCase();
}
function position(a, b) {
    if (!a && !b) {
        return { x: undefined, y: undefined };
    }
    if (a && !b) {
        return { x: a, y: undefined, "default": a.toString() };
    }
    return { x: a, y: b };
}
console.log('empty ', position());
console.log('one param ', position(42));
console.log('two param ', position(10, 12));
