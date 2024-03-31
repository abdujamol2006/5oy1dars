//1-masala//
let setObj = new Set([1, 2, 3, 4, 2, 3, 5, 6, 7, 1]);
console.log(setObj);
//2-masala//
function finder(el) {
  let mapObj = new Map();

  for (let map of el) {
    if (mapObj.has(map)) {
      mapObj.set(map, mapObj.get(map) + 1);
    } else {
      mapObj.set(map, 1);
    }
  }

  return mapObj;
}

let ex = "hello world";
let result = finder(ex);

console.log(result);

//3-masala//
function founder(arr) {
  return new Set(arr).size === arr.length;
}

let arr1 = [1, 2, 3, 4, 5];
let arr2 = [1, 2, 2, 4, 5];

console.log(founder(arr1));
console.log(founder(arr2));
//4-masala//
function tofind(arr1, arr2) {
  let setarr = new Set([...arr1, ...arr2]);
  return Array.from(setarr);
}

let setarr1 = [1, 2, 3];
let setarr2 = [2, 3, 4, 5];

let finds = tofind(arr1, arr2);
console.log(tofind);
//6-masala//

function cut(arr) {
  return [...new Set(arr)];
}

let first = [1, 2, 2, 3, 4, 4, 5];
const jas = cut(first);

console.log(jas);
