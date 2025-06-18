// This example shows how to get the bottom margin of the sheet.

// How to get margin of the bottom.

// Get the size of the bottom margin of the sheet.

let worksheet = Api.GetActiveSheet();
let bottomMargin = worksheet.GetBottomMargin();
worksheet.GetRange("A1").SetValue("Bottom margin: " + bottomMargin + " mm");