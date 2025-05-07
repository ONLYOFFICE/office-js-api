// This example sets the font size to the characters of the cell range.

// How to resize a cell font size.

// Get a range and set its font size.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A2").SetValue("2");
let range = worksheet.GetRange("A1:D5");
range.SetFontSize(20);