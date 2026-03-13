// 1. 배열 순회
let arr = [1, 2, 3];

// 1. 배열 인덱스
for (let i = 0; i < arr.length; i++) {
  //  console.log(arr[i]);    
}

let arr2 = [4, 5, 6, 7, 8];
for (let i = 0 ; i< arr2.length; i++) {
  // console.log(arr2[i]);
}

// 1.2 for of 반복문
for (let item of arr) {
//    console.log(item);
}


let person = {
    name: "이정환",
    age: 27,
    hobby: "테니스",
};

// 2.1 0bject.keys() : 객체의 키들을 배열로 반환
let keys = Object.keys(person);

for (let key of keys) {
  //  console.log(key, person[key]);
}

// 2.2 0bject.values
// : 객체의 값들을 배열로 반환
let values = Object.values(person);

for (let value of values) {
  //  console.log(value);
}

// 2.3 for in 반복문
for (let key in person) {
  // console.log(key, person[key]);
}