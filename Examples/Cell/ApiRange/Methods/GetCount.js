// This example shows how to get the cells count in the range.
// How to find out how many cells a range has.
// Get a range get its cells count and show it in the worksheet.
var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A1").SetValue("1");
oWorksheet.GetRange("B1").SetValue("2");
oWorksheet.GetRange("C1").SetValue("3");
var nCount = oWorksheet.GetRange("A1:C1").GetCount();
oWorksheet.GetRange("A4").SetValue("Count: ");
oWorksheet.GetRange("B4").SetValue(nCount);