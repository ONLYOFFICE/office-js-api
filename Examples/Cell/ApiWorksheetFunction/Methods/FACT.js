// This example shows how to return the factorial of a number, which is equal to 123 *...* number.

// How to calculate a number factorial.

// Use function to calculate the factorial of a number.

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.FACT(123));