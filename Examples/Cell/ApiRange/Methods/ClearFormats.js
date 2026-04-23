// Strip all formatting from a cell range while leaving its values untouched in a spreadsheet.

// How do I remove bold, colors, and other styling from cells in a spreadsheet?

// Reset the appearance of selected cells to plain default style without deleting their data in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1:A2").SetValue("Example text")
worksheet.GetRange("A1:A2").SetBold(true);
let range = worksheet.GetRange("A1");
range.ClearFormats();
worksheet.GetRange("A3").SetValue("Result is bold format cleared for A1 cell.");