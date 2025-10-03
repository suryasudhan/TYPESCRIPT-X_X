// Default Params Value ;
function greet(person) {
    if (person === void 0) { person = "Anonymous"; }
    return "Hello ".concat(person, " ");
}
var res = greet();
console.log(res);
