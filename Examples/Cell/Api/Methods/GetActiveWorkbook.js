// Access the open workbook to read its properties in a spreadsheet.

// How do I retrieve information about the current workbook in a spreadsheet?

// Identify the workbook by name and display that name in a spreadsheet.

const workbook = Api.GetActiveWorkbook();
const worksheet = workbook.GetActiveSheet();
const cell = worksheet.GetActiveCell();
const workbookName = workbook.GetName();
cell.SetValue(workbookName);