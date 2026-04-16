// Set the right margin of the sheet in a spreadsheet.

// How to set margin of the right side in a spreadsheet.

// Resize the right margin of the sheet in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.SetRightMargin(20.8);
let rightMargin = worksheet.GetRightMargin();
worksheet.GetRange("A1").SetValue("Right margin: " + rightMargin + " mm");