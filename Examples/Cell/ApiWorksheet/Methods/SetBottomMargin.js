// Define the bottom page margin for a sheet in a spreadsheet.

// How do I set the bottom margin of a worksheet in a spreadsheet?

// Adjust the spacing at the bottom of the printed page in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.SetBottomMargin(25.1);
let bottomMargin = worksheet.GetBottomMargin();
worksheet.GetRange("A1").SetValue("Bottom margin: " + bottomMargin + " mm");