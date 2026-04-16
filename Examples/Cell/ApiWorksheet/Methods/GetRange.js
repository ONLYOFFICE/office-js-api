// Get an object that represents the selected range of the sheet in a spreadsheet.

// How to get a range using address in a spreadsheet.

// Get range and set its horizontal alignment in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A2").SetValue("2");
let range = worksheet.GetRange("A1:D5");
range.SetAlignHorizontal("center");