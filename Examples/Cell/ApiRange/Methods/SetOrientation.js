// This example sets an angle to the cell range.

// How to set an orientation of cells.

// Get a range and specify its orientation.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("1");
worksheet.GetRange("B1").SetValue("2");
let range = worksheet.GetRange("A1:B1");
range.SetOrientation("xlUpward");
