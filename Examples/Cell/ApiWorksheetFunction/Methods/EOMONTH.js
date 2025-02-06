// This example shows how to return the serial number of the last day of the month before or after the specified number of months.
// How to get a date of the last day of the month before or after specified months.
// Use function to get the serial number of the last day of the month before or after the specified number of months.
const oWorksheet = Api.GetActiveSheet();

var oFunction = Api.GetWorksheetFunction();
var ans = oFunction.EOMONTH("3/16/2018", 10); 

oWorksheet.GetRange("C1").SetValue(ans);
