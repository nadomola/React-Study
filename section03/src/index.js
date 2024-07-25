// import multiply from "./math.js"; //중괄호 없이 설정 
//이름 mul로 간결하게 해도 됨 

import mul, {add,sub}from "./math.js";
//합쳐서 사용하는 것도 가능 


// const moduleData= require("./math"); 
// const { add, sub} = require("./math");
//require 내장 함수 이용해서 
//모듈의 경로를 인수로 불러와서 사용 가능 
// console.log(add(1,2));
// console.log(sub(3,1));
// console.log(multiply(2,3));


import randomColor from "randomcolor";

const color = randomColor();
console.log(color);


// node_modules 제외하고 압축해서 공유하기 
//package.js만 있으면 필요한 라이브러리 npm i , npm install 이용해서 
//언제든지 다시 설치 가능 4