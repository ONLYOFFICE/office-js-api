// Set the left margin of the sheet in a spreadsheet.

// How to set margin of the left side in a spreadsheet.

// Resize the left margin of the sheet in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.SetLeftMargin(20.8);
let leftMargin = worksheet.GetLeftMargin();
worksheet.GetRange("A1").SetValue("Left margin: " + leftMargin + " mm");