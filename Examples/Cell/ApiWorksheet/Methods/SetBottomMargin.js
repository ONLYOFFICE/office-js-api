// This example sets the bottom margin of the sheet.

// How to set margin of the bottom.

// Resize the bottom margin of the sheet.

let worksheet = Api.GetActiveSheet();
worksheet.SetBottomMargin(25.1);
let bottomMargin = worksheet.GetBottomMargin();
worksheet.GetRange("A1").SetValue("Bottom margin: " + bottomMargin + " mm");
