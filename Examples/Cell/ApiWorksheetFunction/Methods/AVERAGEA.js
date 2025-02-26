// This example shows how to return the average (arithmetic mean) of the specified arguments.

// How to find an average (arithmetic mean).

// Use function to get the find an average (arithmetic mean).

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
var ans = oFunction.AVERAGEA(78, 98, 46, 123, 45, true, false);
oWorksheet.GetRange("B2").SetValue(ans);