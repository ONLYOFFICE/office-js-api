// Read the bottom page margin of a worksheet in a spreadsheet.

// How do I find out the bottom margin size of a sheet in a spreadsheet?

// Check how much space is reserved at the bottom of the printed page in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let bottomMargin = worksheet.GetBottomMargin();
worksheet.GetRange("A1").SetValue("Bottom margin: " + bottomMargin + " mm");