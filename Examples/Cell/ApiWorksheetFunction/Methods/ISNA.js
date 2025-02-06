// This example shows how to check whether a value is N/A, and returns true or false. 
// How to check if the cell contains N/A value.
// Use a function to check whether a range data is an N/A value.
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.ISNA("#N/A"));
oWorksheet.GetRange("A2").SetValue(oFunction.ISNA(255));
oWorksheet.GetRange("A3").SetValue(oFunction.ISNA("www.example.com"));