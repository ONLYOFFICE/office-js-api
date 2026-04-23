// Rotate the text inside a cell range in a spreadsheet.

// How do I tilt or angle the text in a group of cells in a spreadsheet?

// Change the direction text flows within cells to improve layout in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("1");
worksheet.GetRange("B1").SetValue("2");
let range = worksheet.GetRange("A1:B1");
range.SetOrientation("xlUpward");