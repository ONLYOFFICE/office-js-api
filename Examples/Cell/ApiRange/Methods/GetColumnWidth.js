// This example shows how to get the column width value.
// How to get width of a range column.
// Get a range get its column width and show it in the worksheet.
var oWorksheet = Api.GetActiveSheet();
var sWidth = oWorksheet.GetRange("A1").GetColumnWidth();
oWorksheet.GetRange("A1").SetValue("Width: ");
oWorksheet.GetRange("B1").SetValue(sWidth);