// This example sets a name to the active sheet.
var oWorksheet = Api.GetActiveSheet();
oWorksheet.SetName("sheet 1");
var sName = oWorksheet.GetName();
oWorksheet.GetRange("A1").SetValue("Worksheet name: ");
oWorksheet.GetRange("A1").AutoFit(false, true);
oWorksheet.GetRange("B1").SetValue(sName);