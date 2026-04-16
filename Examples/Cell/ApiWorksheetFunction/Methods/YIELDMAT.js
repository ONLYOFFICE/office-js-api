// Return the annual yield of a security that pays interest at maturity in a spreadsheet.

// How to return annual yield of a security in a spreadsheet.

// Use a function to get a security annual yield in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.YIELDMAT("1/10/2018", "11/20/2019", "1/1/2017", "6.00%", 90));