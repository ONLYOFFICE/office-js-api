// This example shows how to get an object that represents a sheet.
var oWorksheet = Api.GetSheet("Sheet1");
oWorksheet.GetRange("A1").SetValue("This is a sample text on 'Sheet1'.");