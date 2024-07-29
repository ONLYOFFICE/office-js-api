// This example shows how to get the value without format of the specified range.
var oWorksheet = Api.GetActiveSheet();
var oFormat = Api.Format("123456", "$#,##0");
var oRange = oWorksheet.GetRange("A1");
oRange.SetValue(oFormat);
var sValue2 = oRange.GetValue2();
oWorksheet.GetRange("A3").SetValue("Value of the cell A1 without format: " + sValue2);