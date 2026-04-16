// Get the top margin of the sheet in a spreadsheet.

// How to get margin of the sheet's top side in a spreadsheet.

// Get the size of the top margin of the sheet in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let topMargin = worksheet.GetTopMargin();
worksheet.GetRange("A1").SetValue("Top margin: " + topMargin + " mm");