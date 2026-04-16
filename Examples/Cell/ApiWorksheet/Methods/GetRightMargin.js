// Get the right margin of the sheet in a spreadsheet.

// How to get margin of the sheet's right side in a spreadsheet.

// Get the size of the right margin of the sheet in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let rightMargin = worksheet.GetRightMargin();
worksheet.GetRange("A1").SetValue("Right margin: " + rightMargin + " mm");