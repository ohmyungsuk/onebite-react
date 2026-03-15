let arr1 = [1, 2, 3];
const newLength = arr1.push(4, 5, 6, 7);

//2. pop
// 배열의 맨 뒤에 있는 요쇼를 제거하고, 반환
let arr2 = [1, 2, 3];
const poppedItem = arr2.pop();

let arr3 = [1, 2, 3];
const shiftedItem = arr3.shift();

//4. unshift

let arr4 = [1,2,3];
const newLength2 = arr4,unshift(0);

//5 . slice
// 마치 가위처럼, 배열의 특정 범위를 잘라내서 새로운 배열로 반환
let arr5 = [1, 2, 3, 4, 5];
let sliced = arr5.slice(2, 5);
let sliced2 = arr5.slice(2);
let sliced3 = arr5.slice(-3);

// 5. concat

let arr6 = [1, 2];
let arr7 = [3, 4];

let concatedArr = arr6.concat(arr7);
console.log(concatedArr);


