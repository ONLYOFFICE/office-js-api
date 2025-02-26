// This example shows how to get a value of the specified range.

// How to get a cell value.

// Get a range, get its value and show it in the worksheet.

var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A1").SetValue("1");
var sValue = oWorksheet.GetRange("A1").GetValue();
oWorksheet.GetRange("A3").SetValue("Value of the cell A1: ");
oWorksheet.GetRange("B3").SetValue(sValue);