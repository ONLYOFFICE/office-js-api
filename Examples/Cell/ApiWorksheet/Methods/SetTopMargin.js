// Set the top margin of the sheet in a spreadsheet.

// How to set margin of the top side in a spreadsheet.

// Resize the top margin of the sheet in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.SetTopMargin(25.1);
let topMargin = worksheet.GetTopMargin();
worksheet.GetRange("A1").SetValue("Top margin: " + topMargin + " mm");