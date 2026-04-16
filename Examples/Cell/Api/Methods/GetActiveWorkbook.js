// Get an object that represents the active workbook in a spreadsheet.

// How do I get active workbook in a spreadsheet?

// Get active workbook and display the result in a spreadsheet.

const workbook = Api.GetActiveWorkbook();
const worksheet = workbook.GetActiveSheet();
const cell = worksheet.GetActiveCell();
const workbookName = workbook.GetName();
cell.SetValue(workbookName);