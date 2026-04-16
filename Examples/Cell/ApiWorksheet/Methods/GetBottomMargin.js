// Get the bottom margin of the sheet in a spreadsheet.

// How to get margin of the bottom in a spreadsheet.

// Get the size of the bottom margin of the sheet in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let bottomMargin = worksheet.GetBottomMargin();
worksheet.GetRange("A1").SetValue("Bottom margin: " + bottomMargin + " mm");