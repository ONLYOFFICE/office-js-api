// This example shows how to get the top margin of the sheet.

// How to get margin of the sheet's top side.

// Get the size of the top margin of the sheet.

let worksheet = Api.GetActiveSheet();
let topMargin = worksheet.GetTopMargin();
worksheet.GetRange("A1").SetValue("Top margin: " + topMargin + " mm");