// This example shows how to get a class formatted according to the instructions contained in the format expression.
var oWorksheet = Api.GetActiveSheet();
var oFormat = Api.Format("123456", "$#,##0");
oWorksheet.GetRange("A1").SetValue(oFormat);