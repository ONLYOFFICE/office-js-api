// Change the font size for text in a cell range in a spreadsheet.

// How do I make text larger or smaller in a group of cells in a spreadsheet?

// Adjust the point size of characters across a range to improve readability in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A2").SetValue("2");
let range = worksheet.GetRange("A1:D5");
range.SetFontSize(20);