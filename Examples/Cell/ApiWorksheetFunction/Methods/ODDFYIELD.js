// Return the yield of a security with an odd first period in a spreadsheet.

// How to get the yield of a security in a spreadsheet.

// Use a function to return a security yield in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.ODDFYIELD("1/1/2017", "6/1/2019", "12/1/2016", "3/15/2017", 0.06, 90, 100, 2));