// This example shows how to get an object that represents the selected range of the sheet.
// How to get a range using address.
// Get range and set its horizontal alignment.
var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A2").SetValue("2");
var oRange = oWorksheet.GetRange("A1:D5");
oRange.SetAlignHorizontal("center");