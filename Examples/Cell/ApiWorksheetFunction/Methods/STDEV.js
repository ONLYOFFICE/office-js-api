// Estimate the standard deviation of a sample.

// The STDEV function calculates sample standard deviation while ignoring logical values and text.

// Get the standard deviation of the sample values and place it in cell C1.

const worksheet = Api.GetActiveSheet();

let valueArr = [3, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 0, 1, 13, 14];

// Place the numbers in cells
for (let i = 0; i < valueArr.length; i++) {
  worksheet.GetRange("A" + (i + 1)).SetValue(valueArr[i]);
}

let func = Api.WorksheetFunction;
let ans = func.STDEV(3, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 0, 1, 13, 14);

worksheet.GetRange("C1").SetValue(ans);