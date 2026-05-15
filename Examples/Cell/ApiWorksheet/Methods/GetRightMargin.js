// Check the right margin size of your page layout in a spreadsheet.

// Measure the empty space on the right edge of a printed page in a spreadsheet?

// Show margin values in cells to understand your document boundaries in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let rightMargin = worksheet.GetRightMargin();
worksheet.GetRange("A1").SetValue("Right margin: " + rightMargin + " mm");