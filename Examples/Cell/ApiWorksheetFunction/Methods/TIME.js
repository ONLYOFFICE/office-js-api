// This example shows how to convert hours, minutes and seconds given as numbers to a serial number, formatted with the time format.
// How to create a serial number indicating hours, minutes and seconds.
// Use a function to convert hours, minutes and seconds to serial numbers.
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.TIME(23, 4, 39));