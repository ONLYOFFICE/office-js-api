// This example shows how to return the yield for a Treasury bill.

// How to return the yield for a Treasury bill.

// Use a function to calculate a Treasury bill yield.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.TBILLYIELD("2/15/2018", "6/1/2018", 99.5));