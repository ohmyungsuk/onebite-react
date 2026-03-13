// //함수 표현식
// function funcA() {
//   // console.log("funcA");
// }

// let funcA = funcA;
// VarA();

// let varB = function () {
//   //console.log("funcB");
// };

// varB();

// 2. 화살표 함수
let varC = (value) => {
  console.log(value);
  return value + 1;
};

console.log(varC(10));
// 3. 콜백 함수
function funcD(callback) {
  let value = 100;
  callback(value);
}