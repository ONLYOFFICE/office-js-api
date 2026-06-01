// Define the left page margin for a sheet in a spreadsheet.

// How do I set the left margin of a worksheet in a spreadsheet?

// Adjust the spacing on the left side of the printed page in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.SetLeftMargin(20.8);
let leftMargin = worksheet.GetLeftMargin();
worksheet.GetRange("A1").SetValue("Left margin: " + leftMargin + " mm");