// Find the rank of a value in a list, using the average rank if there are ties in a spreadsheet.

// How do I rank a number when multiple values are equal in a spreadsheet?

// Determine a value's position in a list with tied items split evenly in rank in a spreadsheet.

const worksheet = Api.GetActiveSheet();

let valueArr = [7, 6, 5, 5];

// Place the numbers in cells
for (let i = 0; i < valueArr.length; i++) {
  worksheet.GetRange("A" + (i + 1)).SetValue(valueArr[i]);
}

//method params
let number = worksheet.GetRange("A3");
let range = worksheet.GetRange("A1:A4");
let order = 0;

let func = Api.WorksheetFunction;
let ans = func.RANK_AVG(number, range, order);

worksheet.GetRange("C1").SetValue(ans);