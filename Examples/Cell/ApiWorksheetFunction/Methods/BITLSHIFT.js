// This example shows how to return a number shifted left by the specified number of bits. 

// How to get a result from bits left shift.

// Use function to calculate bitwise left shift operation.

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.BITLSHIFT(4, 2));