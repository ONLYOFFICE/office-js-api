// This example shows how to return the N/A error value which means "no value is available".
// How to return the N/A.
// Use a function to get a N/A error value.
const oWorksheet = Api.GetActiveSheet(); 
var oFunction = Api.GetWorksheetFunction();
var result = oFunction.NA();
oWorksheet.GetRange("C3").SetValue(result);
