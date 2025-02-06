// This example formats the selected range of cells from the sheet as a table.
// How to format as table a range.
// Select a range and format it as a table.
var oWorksheet = Api.GetActiveSheet();
oWorksheet.FormatAsTable("A1:E10");