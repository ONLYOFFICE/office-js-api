// This example shows how to get a sheet index.
// How to get index of the sheet.
// Get the worksheet index.
var oWorksheet = Api.GetActiveSheet();
var nIndex = oWorksheet.GetIndex();
oWorksheet.GetRange("A1").SetValue("Index: ");
oWorksheet.GetRange("B1").SetValue(nIndex);