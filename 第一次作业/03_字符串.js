题目：
	你有一群来自两种不同评分系统的学生。
	第一种评分系统：一种评分系统的分数范围是 1-5，其中 3 及以上代表合格。
	第二种评分系统：另一种评分系统有这些分数：A, A-, B, B-, C, C-，其中 A 是最好的分数，C 是最低的合格分数。
	有下方数组 allStudents，表示所有学生和它们的分数，构造一个包含所有合格的学生的新数组 studentWhoPass。
	提示：可利用 for 循环、if...else 语句和比较运算符

作答：
  思路：对于第一种评分系统，如果分数大于等于3，则将其添加到 studentsWhoPass 数组中。对于第二种评分系统，只要分数不是'C'或'C-'，则将其添加到 studentsWhoPass 数组中。
	新数组 studentsWhoPass 中包含了所有合格的学生。在这种情况下，我将数字和字符串形式的分数都添加到了该数组中，以便显示所有合格的学生

  code：  
let allStudents = [
  'A',
  'B-',
  1,
  4,
  5,
  2
]

let studentsWhoPass = [];



let allStudents = [
  'A',
  'B-',
  1,
  4,
  5,
  2
];

let studentsWhoPass = [];

// 遍历所有学生
for (let i = 0; i < allStudents.length; i++) {
  let score = allStudents[i];
  
  // 第一种评分系统
  if (typeof score === 'number') {
    if (score >= 3) {
      studentsWhoPass.push(score);
    }
  }
  
  // 第二种评分系统
  if (typeof score === 'string') {
    if (score !== 'C' && score !== 'C-') {
      studentsWhoPass.push(score);
    }
  }
}

console.log(studentsWhoPass); 
