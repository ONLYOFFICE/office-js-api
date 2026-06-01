// List every sheet in the workbook and write their names to cells in a spreadsheet.

// How do I get the full list of sheets that exist in a workbook in a spreadsheet?

// Enumerate all tabs by index and record each sheet's name in a spreadsheet.

Api.AddSheet('new_sheet_name');

const workbook = Api.GetActiveWorkbook();
const sheets = workbook.GetSheets();
let sheetName1 = sheets[0].GetName();
let sheetName2 = sheets[1].GetName();
sheets[1].GetRange("A1").SetValue(sheetName1);
sheets[1].GetRange("A2").SetValue(sheetName2);