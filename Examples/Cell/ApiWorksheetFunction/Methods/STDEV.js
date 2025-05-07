// This example shows how to estimate standard deviation based on a sample (ignores logical values and text in the sample).

// How to calculate the standard deviation based on a sample.

// Use a function to get the standard deviation.

const worksheet = Api.GetActiveSheet();

let valueArr = [3, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 0, 1, 13, 14];

// Place the numbers in cells
for (let i = 0; i < valueArr.length; i++) {
  worksheet.GetRange("A" + (i + 1)).SetValue(valueArr[i]);
}

let func = Api.GetWorksheetFunction();
let ans = func.STDEV(3, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 0, 1, 13, 14);

worksheet.GetRange("C1").SetValue(ans);