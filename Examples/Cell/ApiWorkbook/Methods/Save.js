// Save changes to the workbook in a spreadsheet.

// How can I save using a workbook in a spreadsheet?

// Save for a workbook in a spreadsheet.

const workbook = Api.GetActiveWorkbook();
const worksheet = workbook.GetActiveSheet();
worksheet.GetRange("A1").SetValue("This sample text is saved to the worksheet.");
workbook.Save();