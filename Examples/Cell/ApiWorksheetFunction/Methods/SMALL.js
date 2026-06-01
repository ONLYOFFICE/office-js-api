// Return the k-th smallest value from a data set.

// The SMALL function finds the smallest value at a specified position in a sorted data range.

// Get the 8th smallest value from the data range and display it in cell C1.

const worksheet = Api.GetActiveSheet();

let valueArr = [1, 0, 0, 0, 0, 1, 0, 0, 2, 3, 4, 5, 6, 8, 10, 12];

// Place the numbers in cells
for (let i = 0; i < valueArr.length; i++) {
  worksheet.GetRange("A" + (i + 1)).SetValue(valueArr[i]);
}

// method params
let range = worksheet.GetRange("A1:A16");
let position = 8;

let func = Api.WorksheetFunction;
let ans = func.SMALL(range, position);

worksheet.GetRange("C1").SetValue(ans);