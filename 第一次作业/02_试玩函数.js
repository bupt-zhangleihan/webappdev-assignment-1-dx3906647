题目：
	创建一个能够计算三角形面积的函数，再创建一个在控制台打印给定两个数值之间所有素数的函数。  
	试试看让它们有多种参数，并且让其中一部分参数有默认值。  

作答：
// 定义一个能够计算三角形面积的函数
function calculateTriangleArea(base, height) {
  var area = 0.5 * base * height;
  return area;
}

// 定义一个在控制台打印给定两个数值之间所有素数的函数
function printPrimeNumbers(start, end = 100) {
  var primeNumbers = [];
  for (var num = start; num <= end; num++) {
    if (num > 1) {
      var isPrime = true;
      for (var i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
          isPrime = false;
          break;
        }
      }
      if (isPrime) {
        primeNumbers.push(num);
      }
    }
  }
  console.log("素数列表:");
  for (var prime of primeNumbers) {
    console.log(prime);
  }
}

// 测试 calculateTriangleArea 函数
var base = 5;
var height = 8;
var area = calculateTriangleArea(base, height); 
console.log("三角形的面积:", area);

// 测试 printPrimeNumbers 函数
var start = 1;
var end = 20;
printPrimeNumbers(start, end);
