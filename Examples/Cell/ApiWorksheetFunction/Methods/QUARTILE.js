// Find the quartile value of a data set in a spreadsheet.

// What is the value at a specific quartile position in a data set in a spreadsheet?

// Determine which data point marks a quarter, half, or three-quarters of a distribution in a spreadsheet.

const worksheet = Api.GetActiveSheet();

let valueArr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
let quart = 3; //eg: third quartile (75th percentile)

// Place the numbers in cells
for (let i = 0; i < valueArr1.length; i++) {
  worksheet.GetRange("A" + (i + 1)).SetValue(valueArr1[i]);
}

//method params
let array = worksheet.GetRange("A1:A12");

let func = Api.WorksheetFunction;
let ans = func.QUARTILE(array, quart);

worksheet.GetRange("C1").SetValue(ans);