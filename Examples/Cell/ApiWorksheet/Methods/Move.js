// This example moves the sheet to another location in the workbook.
// How to change an order of the sheet.
// Move a sheet.
var oSheet1 = Api.GetActiveSheet();
Api.AddSheet("Sheet2");
var oSheet2 = Api.GetActiveSheet();
oSheet2.Move(oSheet1);