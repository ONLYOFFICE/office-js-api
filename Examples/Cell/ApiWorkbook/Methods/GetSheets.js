// This example shows how to get all worksheets from the workbook.

Api.AddSheet('new_sheet_name');

const workbook = Api.GetActiveWorkbook();
const sheets = workbook.GetSheets();
let sheetName1 = sheets[0].GetName();
let sheetName2 = sheets[1].GetName();
sheets[1].GetRange("A1").SetValue(sheetName1);
sheets[1].GetRange("A2").SetValue(sheetName2);
