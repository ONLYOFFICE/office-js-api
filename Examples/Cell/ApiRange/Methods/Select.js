// This example selects the current range.
// How to select a range.
// Select a range then get selection form a worksheet.
var oWorksheet = Api.GetActiveSheet();
var oRange = oWorksheet.GetRange("A1:C1");
oRange.SetValue("1");
oRange.Select();
Api.GetSelection().SetValue("selected");