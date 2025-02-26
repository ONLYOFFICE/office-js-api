// This example deletes the worksheet.

// How to delete sheets.

// Remove a worksheet.

Api.AddSheet("New sheet");
var oSheet = Api.GetActiveSheet();
oSheet.Delete();
var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A3").SetValue("This method just deleted the second sheet from this spreadsheet.");