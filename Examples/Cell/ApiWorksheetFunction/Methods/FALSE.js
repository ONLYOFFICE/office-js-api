// This example shows how to return the false logical value.

// How to get false value.

// Use function to get a boolean false.

const oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
var ans = oFunction.FALSE(); //returns false, doesnt require arguments
oWorksheet.GetRange("C1").SetValue(ans);
