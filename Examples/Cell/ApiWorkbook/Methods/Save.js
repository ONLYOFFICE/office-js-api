// Persist all unsaved changes to disk after editing a workbook in a spreadsheet.

// How do I make sure my changes are written to the file in a spreadsheet?

// Write a value to a cell and immediately commit the workbook to storage in a spreadsheet.

const workbook = Api.GetActiveWorkbook();
const worksheet = workbook.GetActiveSheet();
worksheet.GetRange("A1").SetValue("This sample text is saved to the worksheet.");
workbook.Save();