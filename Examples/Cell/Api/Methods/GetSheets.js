// Collect all sheet tabs into a list and display their names in cells in a spreadsheet.

// How do I loop through every sheet in the workbook and read their names in a spreadsheet?

// Build an inventory of all tabs by gathering their titles and writing them out in a spreadsheet.

Api.AddSheet("new_sheet_name");
let sheets = Api.GetSheets();
let sheetName1 = sheets[0].GetName();
let sheetName2 = sheets[1].GetName();
sheets[1].GetRange("A1").SetValue(sheetName1);
sheets[1].GetRange("A2").SetValue(sheetName2);