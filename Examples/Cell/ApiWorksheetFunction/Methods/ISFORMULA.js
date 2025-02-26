// This example shows how to check whether a reference to a cell contains a formula, and returns true or false. 

// How to check if the cell contains formula or not.

// Use a function to check whether a range data is a formula or not.

const oWorksheet = Api.GetActiveSheet();

// Set the formula in cell B3

oWorksheet.GetRange("B3").SetValue("=SUM(5, 6)");

// Check if there is a formula in C3

var oFunction = Api.GetWorksheetFunction();
var result = oFunction.ISFORMULA(oWorksheet.GetRange("B3"));
oWorksheet.GetRange("C3").SetValue(result);
