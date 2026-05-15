// Read the text rotation angle applied to a cell range in a spreadsheet.

// How do I find out the current text orientation of a range in a spreadsheet?

// Confirm the direction cells are tilted after applying a rotation style in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("1");
worksheet.GetRange("B1").SetValue("2");
let range = worksheet.GetRange("A1:B1");
range.SetOrientation("xlUpward");
let orientation = range.GetOrientation();
worksheet.GetRange("A3").SetValue("Orientation: " + orientation);