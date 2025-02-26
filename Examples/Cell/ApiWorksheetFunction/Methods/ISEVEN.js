// This example shows how to return true if a number is even. 

// How to check if the number is even.

// Use a function to check whether a number is even or not.

const oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
var result = oFunction.ISEVEN("66");
oWorksheet.GetRange("C3").SetValue(result)
