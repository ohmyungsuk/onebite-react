//1. null 병합 연산자
// -> 존재하는 값을 추려내는 기능
// -> null 또는 undefined인 경우에만 오른쪽 피연산자를 반환

let var1;
let var2 = 10;
let var3 = 20;

let var4 = var1 ?? var2;
let var5 = var1 ?? var3;
let var6 = var2 ?? var3;

let userName = "오명석";
let defaultName = "홍길동";

let displayName = userName ?? defaultName;
console.log(displayName);

//2. typeof 연산자
// -> 값의 타입을 문자열로 반환하는 연산자

let var7 = 1;
var7 = "hello";
var7 = true;

console.log(typeof var7); // boolean
console.log(typeof 1); // number
console.log(typeof "hello"); // string
console.log(typeof null); // object
console.log(typeof undefined); // undefined
console.log(typeof {});

//3. 삼항 연산자
// -> 항을 3개 가지는 연산자
// -> 조건식 ? 참일 때의 값 : 거짓일 때의 값
let var8 = 10;

//요구사항 : 변수 res에 var8의 값이 짝수 - > "짝수입니다", 홀수 -> "홀수입니다"를
let res = var8 % 2 === 0 ? "짝수입니다" : "홀수입니다";
console.log(res);
