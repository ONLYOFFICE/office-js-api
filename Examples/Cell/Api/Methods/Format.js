// This example shows how to get a class formatted according to the instructions contained in the format expression.
// How to set a format for a cell or a range using a format expression.
// Change a format of a range using an expression.
var oWorksheet = Api.GetActiveSheet();
var oFormat = Api.Format("123456", "$#,##0");
oWorksheet.GetRange("A1").SetValue(oFormat);