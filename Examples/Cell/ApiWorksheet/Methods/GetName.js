// This example shows how to get a sheet name.
var oWorksheet = Api.GetActiveSheet();
var sName = oWorksheet.GetName();
oWorksheet.GetRange("A1").SetValue("Name: ");
oWorksheet.GetRange("B1").SetValue(sName);