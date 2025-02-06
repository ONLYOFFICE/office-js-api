// This example shows how to return the sheet number of the reference sheet.
// How to get a sheet number.
// Use a function to get a sheet index.
const oWorksheet = Api.GetActiveSheet(); 
var oFunction = Api.GetWorksheetFunction();
var result = oFunction.SHEET("Sheet1");
oWorksheet.GetRange("C3").SetValue(result);
