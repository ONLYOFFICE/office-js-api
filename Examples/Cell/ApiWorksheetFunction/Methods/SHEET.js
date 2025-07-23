// This example shows how to return the sheet number of the reference sheet.

// How to get a sheet number.

// Use a function to get a sheet index.

const worksheet = Api.GetActiveSheet(); 
let func = Api.WorksheetFunction;
let result = func.SHEET("Sheet1");
worksheet.GetRange("C3").SetValue(result);
