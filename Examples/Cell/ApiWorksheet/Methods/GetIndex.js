// Find the position of a sheet among all sheets in a spreadsheet.

// How do I get the tab number of the active sheet in a spreadsheet?

// Identify the sheet order index and display it in a cell in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let index = worksheet.GetIndex();
worksheet.GetRange("A1").SetValue("Sheet index: " + index);