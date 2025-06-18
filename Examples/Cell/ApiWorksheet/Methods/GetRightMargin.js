// This example shows how to get the right margin of the sheet.

// How to get margin of the sheet's right side.

// Get the size of the right margin of the sheet.

let worksheet = Api.GetActiveSheet();
let rightMargin = worksheet.GetRightMargin();
worksheet.GetRange("A1").SetValue("Right margin: " + rightMargin + " mm");