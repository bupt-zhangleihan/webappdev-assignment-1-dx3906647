题目：
    编写一段程序，列出1-20内所有3的倍数，将他们输出到控制台  
    提示：可使用for循环，修改迭代表达式  

作答：
	// 创建一个空数组，用于存储所有 3 的倍数
	let multiplesOfThree = [];
	
	// 使用 for 循环来遍历 1 到 20 的数字
	for (let i = 1; i <= 20; i++) {
	  // 判断当前数字是否是 3 的倍数
	  if (i % 3 === 0) {
	    // 如果是，将其添加到 multiplesOfThree 数组中
	    multiplesOfThree.push(i);
	  }
	}
	
	// 输出结果到控制台
	console.log(multiplesOfThree);
