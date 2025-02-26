// This example shows how to get the hypergeometric distribution.

// How to get a result from a hypergeometric distribution.

// Use a function to get the result of hypergeometric distribution.

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.HYPGEOMDIST(2, 3, 3, 12));