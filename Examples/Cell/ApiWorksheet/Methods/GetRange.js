// This example shows how to get an object that represents the selected range of the sheet.
var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A2").SetValue("2");
var oRange = oWorksheet.GetRange("A1:D5");
oRange.SetAlignHorizontal("center");