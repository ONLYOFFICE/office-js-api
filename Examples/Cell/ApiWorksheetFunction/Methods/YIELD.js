// Return the yield on a security that pays periodic interest in a spreadsheet.

// How to return the yield on a security in a spreadsheet.

// Use a function to calculate the yield on a security that pays periodic interest in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.YIELD("1/10/2018", "11/20/2019", "3.75%", 90, 100, 4));