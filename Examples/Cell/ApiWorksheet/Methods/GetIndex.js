// Get the left margin of the sheet in a spreadsheet.

// How to get margin of the sheet's left side in a spreadsheet.

// Get the size of the left margin of the sheet in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let leftMargin = worksheet.GetLeftMargin();
worksheet.GetRange("A1").SetValue("Left margin: " + leftMargin + " mm");