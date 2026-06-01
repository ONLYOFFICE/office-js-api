// Count the total number of cells inside a selected range in a spreadsheet.

// How do I find out how many cells are in a range in a spreadsheet?

// Confirm the expected cell count by writing the total next to the filled range.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A1:D10");
range.SetValue("I was selected");
worksheet.GetRange("A11").SetValue("Cells count in the selected range should be 40: " + range.GetCellsCount());