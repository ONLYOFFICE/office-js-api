// This example shows how to convert text to a number, in a locale-independent way.

// How to get a number from text.

// Use a function to convert a text to a number.

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.NUMBERVALUE("2.500,27", ",", "."));