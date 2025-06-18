// This example shows how to check whether a reference to a cell contains a formula, and returns true or false. 

// How to check if the cell contains formula or not.

// Use a function to check whether a range data is a formula or not.

const worksheet = Api.GetActiveSheet();

// Set the formula in cell B3
worksheet.GetRange("B3").SetValue("=SUM(5, 6)");

// Check if there is a formula in C3
let func = Api.GetWorksheetFunction();
let result = func.ISFORMULA(worksheet.GetRange("B3"));
worksheet.GetRange("C3").SetValue(result);