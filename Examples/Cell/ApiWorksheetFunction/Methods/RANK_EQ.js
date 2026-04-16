// Return the rank of a number in a list of numbers: its size relative to other values in the list. If more than one value has the same rank, the top rank of that set of values is returned in a spreadsheet.

// How to estimate a rank of a number from the list, return top if there are multiple in a spreadsheet.

// Use a function to estimate rank of the a number from the list in a spreadsheet.

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
let ans = func.RANK_EQ(number, range, order);

worksheet.GetRange("C1").SetValue(ans);