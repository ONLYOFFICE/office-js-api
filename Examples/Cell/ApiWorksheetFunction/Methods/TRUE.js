// This example shows how to return the true logical value.

// How to get a true value.

// Use a function to return true value.

const oWorksheet = Api.GetActiveSheet();

var logical1 = 1 > 0;
var logical2 = 2 > 0;

var oFunction = Api.GetWorksheetFunction();
var ans = oFunction.XOR(logical1, logical2); //Works on XOR gate logic

oWorksheet.GetRange("C1").SetValue(ans);
