// This example shows how to get the cosine of an angle.

// How to find a cosine.

// Use function to get the cosine of an angle.

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.COS(1.5));