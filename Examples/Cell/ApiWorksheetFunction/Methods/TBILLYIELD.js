// Return the yield for a Treasury bill in a spreadsheet.

// How to return the yield for a Treasury bill in a spreadsheet.

// Use a function to calculate a Treasury bill yield in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.TBILLYIELD("2/15/2018", "6/1/2018", 99.5));