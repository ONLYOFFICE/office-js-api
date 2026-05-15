// Align text vertically inside a cell range in a spreadsheet.

// How do I position text at the top, middle, or bottom of cells in a spreadsheet?

// Control where content sits within the height of each cell in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A1:D5");
worksheet.GetRange("A2").SetValue("This is just a sample text distributed in the A2 cell.");
range.SetAlignVertical("distributed");