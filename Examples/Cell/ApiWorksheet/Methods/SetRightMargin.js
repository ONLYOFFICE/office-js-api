// This example sets the right margin of the sheet.

// How to set margin of the right side.

// Resize the right margin of the sheet.

let worksheet = Api.GetActiveSheet();
worksheet.SetRightMargin(20.8);
let rightMargin = worksheet.GetRightMargin();
worksheet.GetRange("A1").SetValue("Right margin: " + rightMargin + " mm");
