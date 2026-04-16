// Get all worksheets from the workbook in a spreadsheet.

// How can I get the sheets using a workbook in a spreadsheet?

// Get the sheets for a workbook in a spreadsheet.

Api.AddSheet('new_sheet_name');

const workbook = Api.GetActiveWorkbook();
const sheets = workbook.GetSheets();
let sheetName1 = sheets[0].GetName();
let sheetName2 = sheets[1].GetName();
sheets[1].GetRange("A1").SetValue(sheetName1);
sheets[1].GetRange("A2").SetValue(sheetName2);