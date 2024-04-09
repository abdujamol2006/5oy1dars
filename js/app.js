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

let arry = [54];
let setObjc = new Set([1, 2, 3, 3, 5, 6, 6, 7, ...arry]);
let newObj = setObjc.delete(...arry);
console.log(setObjc);

console.log(jas);
// 7-masala

let arre = [1, 2, 3];
let newArr = new Set([1, 2, 3, 4, 5, 6]);
console.log(newArr.has(arre));

// 8-masala

let set1 = new Set("apple");
let set2 = new Set("orange");
let set3 = set1.add(set2);
console.log(set3);

// 9-masala

/*let arr = [1, 2, 3, 4, 5];
let newMap = new Map(arr);
newMap.set(arr);
console.log(newMap);*/
