// This example merges the selected cell range into a single cell or a cell row.
// How to get a range using cell addresses and merge them into one.
// Get a range, merge its cells into one cell.
var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A3:E8").Merge(true);
oWorksheet.GetRange("A9:E14").Merge(false);