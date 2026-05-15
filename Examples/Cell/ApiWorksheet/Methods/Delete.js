// Remove a sheet from the workbook in a spreadsheet.

// How do I delete a worksheet that is no longer needed in a spreadsheet?

// Permanently discard a sheet and confirm the removal with a message.

Api.AddSheet("New sheet");
let sheet = Api.GetActiveSheet();
sheet.Delete();
let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A3").SetValue("This method just deleted the second sheet from this spreadsheet.");