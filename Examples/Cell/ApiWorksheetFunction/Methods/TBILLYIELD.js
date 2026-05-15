// Return the yield for a Treasury bill in a spreadsheet.

// Calculate the yield based on settlement date, maturity date, and price.

// Apply the TBILLYIELD function with Treasury bill parameters.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.TBILLYIELD("2/15/2018", "6/1/2018", 99.5));