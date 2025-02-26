// This example shows how to return the largest value in a set of values. Does not ignore logical values and text.

// How to get a maximum from a list including text and logical values.

// Use a function to find a maximum from a list of objects.

const oWorksheet = Api.GetActiveSheet();
var oRange = oWorksheet.GetRange("A1:A5").GetValue();
var oFunction = Api.GetWorksheetFunction();
var maxA = oFunction.MAX(23, 45, true, "text", 0.89);
oWorksheet.GetRange("C1").SetValue(maxA);
