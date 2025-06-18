// This example shows how to return the number of periods required by an investment to reach a specified value.

// How to get periods required to get a value of an investment.

// Use a function to get the number of periods required by an investment to reach a specified value.

let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
worksheet.GetRange("A1").SetValue(func.PDURATION("2.50%", 2000, 2200));