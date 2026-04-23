// Find the quartile using exclusive percentile calculation in a spreadsheet.

// What is the quartile boundary excluding the minimum and maximum values in a spreadsheet?

// Calculate quartile position based on percentiles from 0 to 1 in a spreadsheet.

const worksheet = Api.GetActiveSheet();

let valueArr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
let quart = 2; 

// Place the numbers in cells
for (let i = 0; i < valueArr1.length; i++) {
  worksheet.GetRange("A" + (i + 1)).SetValue(valueArr1[i]);
}

//method params
let array = worksheet.GetRange("A1:A12");

let func = Api.WorksheetFunction;
let ans = func.QUARTILE_EXC(array, quart); //0...1 exclusive

worksheet.GetRange("C1").SetValue(ans);