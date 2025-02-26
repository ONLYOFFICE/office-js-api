// This example shows how to convert an arabic numeral to a roman numeral in the string format.

// How to get roman numbers from arabic.

// Use a function to convert numbers from arabic numeral to roman.

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.ROMAN(1250, 4));