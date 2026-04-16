// Return the k-th largest value in a data set. For example, the fifth largest number in a spreadsheet.

// How to find the k-th largest value in a data set in a spreadsheet.

// Use a function to find out the largest value in a data set specifying its order number in a spreadsheet.

const worksheet = Api.GetActiveSheet();

let numbersArr = [4, 13, 27, 56, 46, 79, 22, 12];

// Place the numbers in cells

for (let i = 0; i < numbersArr.length; i++) {
  worksheet.GetRange("A" + (i + 1)).SetValue(numbersArr[i]);
}

let func = Api.WorksheetFunction;
let range = worksheet.GetRange("A1:A8");
let largePostion = 4;
let kLargest = func.LARGE(range, largePostion);
worksheet.GetRange("C1").SetValue(kLargest);