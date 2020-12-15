// На forEach

// 1 Дан массив с числами. Создайте новый массив, состоящий из квадратов этих чисел. 

let arr = [1, 2, 3, 4, 5];

newArr = [];

arr.forEach(function(element) {
	newArr.push(element * element);
    }
);  

console.log(newArr);


// 2 Дан массив с числами. Найдите сумму этих чисел. 

let arr = [1, 2, 3, 4, 5];
let sum = 0;
arr.forEach(function(element) {
	sum += element;
    }
);

alert(sum);


// На map

// 3 Дан массив с числами. Сделайте из него массив, состоящий из квадратов этих чисел. 

let arr = [1, 2, 3, 4, 5];

newArr = [];

arr.map(function(element) {
	newArr.push(element * element);
    }
);  

console.log(newArr);


// На every, some

// 4 Дан массив с числами. Проверьте то, что все элементы в массиве больше нуля. 

let arr = [1, 2, 3, 4, 5];

let checkArr = arr.every(function(element) {
	if (element > 0) {
		return true;
        } else {
            return false;
        }
    }
);

console.log(checkArr);


// 5 Дан массив с числами. Проверьте то, что в нем есть отрицательные элементы.
 
let arr = [1, -2, 3, -4, 5];

let checkArr = arr.some(function(element) {
	if (element < 0) {
		return true;
        } else {
            return false;
        }
    }
);

console.log(checkArr);


// На filter

// 6 Дан массив с числами. Оставьте в нем только отрицательные числа. 

let arr = [1, -2, 3, -4, 5];

let newArr = arr.filter(function(element) {
        if(element < 0) {
            return true;
        } else {
            return false;
        }
    }
);
 
console.log(newArr);

// 7 Дан массив с числами. Оставьте в нем только четные числа. 

let arr = [10, 12, 53, 4, 75];

let newArr = arr.filter(function(element) {
        if(element % 2 == 0) {
            return true;
        } else {
            return false;
        }
    }
);
 
console.log(newArr);

// 8 Дан массив со строками. Оставьте в нем только те строки, длина которых больше 5-ти символов.

let arr = ["aaaaaa", "bbb", "cc", "ddddddd", "eeee"];

let newArr = arr.filter(function(element) {
        if(element.length >= 5) {
            return true;
        } else {
            return false;
        }
    }
);
 
console.log(newArr);

// 9 Дан массив, в нем могут быть обычные элементы и подмассивы, например [1, 2, [3, 4], 5, [6, 7]]. Оставьте в нем только подмассивы. 

let arr = [1, 2, [3, 4], 5, [6, 7]];

let newArr = arr.filter(function(element) {
    return Array.isArray(element)
    }
);
console.log(newArr);

// 10 Дан массив с числами. Посчитайте количество отрицательных чисел в этом массиве. 

let arr = [1, -2, 3, -4, 5];
let sum = arr.filter(function(element) {
    if(element < 0) {
        return true;
        } else {
            return false;
        }
    }
);

console.log(sum.length);


// На reduce, reduceRight

// 11 Дан массив с числами. Найдите сумму этих чисел.

let arr = [10, 12, 53, 4, 75];

let calcSum = arr.reduce(function(sum, element) {
	return sum + element;
}, 0);

console.log(calcSum);

// 12 Дан массив с числами. Найдите сумму первых N элементов до первого нуля. Пример: [1, 2, 3, 0, 4, 5, 6] - суммируем первые 3 элемента, так как дальше стоит элемент 
// с числом 0. 

// 13 Дан массив с числами. Найдите сумму последних N элементов до первого нуля с конца. Пример: [1, 2, 3, 0, 4, 5, 6] - суммируем последние 3 элемента, так как 
// дальше стоит элемент с числом 0. 

// 14 Дан массив с числами. Узнайте сколько элементов с начала массива надо сложить, чтобы в сумме получилось больше 10-ти. 

// 15 Дан массив с числами. Узнайте сколько элементов с конца массива надо сложить, чтобы в сумме получилось больше 10-ти.

// Закрепление

// 16 Дан массив с числами. Оставьте в нем только положительные числа. Затем извлеките квадратный корень и этих чисел.
