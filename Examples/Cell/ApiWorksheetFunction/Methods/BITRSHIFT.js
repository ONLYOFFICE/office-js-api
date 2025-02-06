// This example shows how to return a number shifted right by the specified number of bits. 
// How to get a result from bits right shift.
// Use function to calculate bitwise right shift operation.
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.BITRSHIFT(13, 2));