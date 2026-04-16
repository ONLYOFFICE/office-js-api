// Get a sheet collection that represents all the sheets in the active workbook in a spreadsheet.

// Get all sheets as an array in a spreadsheet.

// How to get array of sheets in a spreadsheet.

Api.AddSheet("new_sheet_name");
let sheets = Api.GetSheets();
let sheetName1 = sheets[0].GetName();
let sheetName2 = sheets[1].GetName();
sheets[1].GetRange("A1").SetValue(sheetName1);
sheets[1].GetRange("A2").SetValue(sheetName2);