// Align text horizontally inside a cell range in a spreadsheet.

// How do I center or justify text across a group of cells in a spreadsheet?

// Control whether cell content sits to the left, center, or right within each cell in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A2").SetValue("2");
let range = worksheet.GetRange("A1:D5");
range.SetAlignHorizontal("center");