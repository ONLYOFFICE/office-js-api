// This example shows how to return the ratio of the factorial of a sum of numbers to the product of factorials.

// How to get a result from the ratio of the factorial of a sum of numbers to the product of factorials.

// Use a function to find the ratio of the factorial of a sum of numbers to the product of factorials.

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.MULTINOMIAL(2, 0, 0, 0, 0, 3, 0, 0, 0, 0, 4, 0, 0, 0, 0, 5));