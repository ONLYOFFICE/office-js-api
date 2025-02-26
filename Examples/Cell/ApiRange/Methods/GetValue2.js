// This example shows how to get the value without format of the specified range.

// How to get a cell raw value.

// Get a range, get its raw value without format and show it in the worksheet.

var oWorksheet = Api.GetActiveSheet();
var oFormat = Api.Format("123456", "$#,##0");
var oRange = oWorksheet.GetRange("A1");
oRange.SetValue(oFormat);
var sValue2 = oRange.GetValue2();
oWorksheet.GetRange("A3").SetValue("Value of the cell A1 without format: " + sValue2);