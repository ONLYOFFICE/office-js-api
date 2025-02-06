// This example shows how to check whether a value is a logical value (true or false), and returns true or false. 
// How to check if the cell contains a logical value.
// Use a function to check whether a range data is a logical value.
const oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("B3").SetValue("66");

var oFunction = Api.GetWorksheetFunction();
var result = oFunction.ISLOGICAL(oWorksheet.GetRange("B3"));
oWorksheet.GetRange("C3").SetValue(result);
