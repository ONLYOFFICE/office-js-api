// Read the left page margin of the active sheet in a spreadsheet.

// How do I find out the left margin width of a sheet in a spreadsheet?

// Retrieve the left margin value in millimeters and show it in a cell in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let leftMargin = worksheet.GetLeftMargin();
worksheet.GetRange("A1").SetValue("Left margin: " + leftMargin + " mm");