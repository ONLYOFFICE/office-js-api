// This example shows how to get a count of cells in the specified range.

// How to get a count of cells in the range.

// Get a count of cells in the range and display it in another cell.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A1:D10");
range.SetValue("I was selected");
worksheet.GetRange("A11").SetValue("Cells count in the selected range should be 40: " + range.GetCellsCount());
