// This example shows how to return the serial number of the date which comes the indicated number of months before or after the start date.
// How to get a date some months before or after the start date.
// Use function to get the serial number of the date indicated number of months before or after the start date.
const oWorksheet = Api.GetActiveSheet();

var oFunction = Api.GetWorksheetFunction();
var ans = oFunction.EDATE("3/16/2018", 7); 

oWorksheet.GetRange("C1").SetValue(ans);
