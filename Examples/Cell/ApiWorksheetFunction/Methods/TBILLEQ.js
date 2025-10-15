// This example shows how to return the bond-equivalent yield for a treasury bill.

// How to return the bond-equivalent yield for a treasury bill.

// Use a function to calculate the bond-equivalent yield.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.TBILLEQ("1/1/2018", "11/20/2018", "8.00%"));