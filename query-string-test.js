let qs = require('query-string');
let data = "cs1=aaa&cs2=bbb";

console.log(typeof qs.parse(data));
console.log(typeof JSON.stringify(qs.parse(data)));

console.log(qs.parse(data));
console.log(qs.parse(data).text);
console.log(qs.parse(data)["cs1"]);
console.log(JSON.stringify(qs.parse(data)));

