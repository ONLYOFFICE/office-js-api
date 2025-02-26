// This example shows how to choose a value or action to perform from a list of values, based on an index number.

// How to choose a value or action to perform from a list of values, based on an index number.

// Use function to choose a value or action to perform from a list of values, based on an index number.

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.CHOOSE(2, 3, 4, 89, 76, 0));