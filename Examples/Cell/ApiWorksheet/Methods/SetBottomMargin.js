// Set the bottom margin of the sheet in a spreadsheet.

// How to set margin of the bottom in a spreadsheet.

// Resize the bottom margin of the sheet in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.SetBottomMargin(25.1);
let bottomMargin = worksheet.GetBottomMargin();
worksheet.GetRange("A1").SetValue("Bottom margin: " + bottomMargin + " mm");