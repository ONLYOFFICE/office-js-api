// This example shows how to get the left margin of the sheet.

// How to get margin of the sheet's left side.

// Get the size of the left margin of the sheet.

let worksheet = Api.GetActiveSheet();
let leftMargin = worksheet.GetLeftMargin();
worksheet.GetRange("A1").SetValue("Left margin: " + leftMargin + " mm");