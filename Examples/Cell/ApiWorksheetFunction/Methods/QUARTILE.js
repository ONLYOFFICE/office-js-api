// This example shows how to return the quartile of a data set.

// How to get the quartile of a data set.

// Use a function to calculate a part divided by four of a data set.

const worksheet = Api.GetActiveSheet();

let valueArr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
let quart = 3; //eg: third quartile (75th percentile)

// Place the numbers in cells
for (let i = 0; i < valueArr1.length; i++) {
  worksheet.GetRange("A" + (i + 1)).SetValue(valueArr1[i]);
}

//method params
let array = worksheet.GetRange("A1:A12");

let func = Api.GetWorksheetFunction();
let ans = func.QUARTILE(array, quart);

worksheet.GetRange("C1").SetValue(ans);