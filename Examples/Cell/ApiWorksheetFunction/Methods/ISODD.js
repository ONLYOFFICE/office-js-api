// This example shows how to return true if a number is odd. 

// How to check if the number is odd.

// Use a function to check whether a number is odd or not.

const oWorksheet = Api.GetActiveSheet();

var oFunction = Api.GetWorksheetFunction();
var result = oFunction.ISODD("94");
oWorksheet.GetRange("C3").SetValue(result);
