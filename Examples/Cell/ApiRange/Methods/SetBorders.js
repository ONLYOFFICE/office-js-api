// This example sets the border to the cell with the parameters specified.

// How to set the thick bottom border to a cell.

// Get a range and set its border specifying its side, type and color.

let worksheet = Api.GetActiveSheet();
worksheet.SetColumnWidth(0, 50);
worksheet.GetRange("A2").SetBorders("Bottom", "Thick", Api.CreateColorFromRGB(255, 111, 61));
worksheet.GetRange("A2").SetValue("This is a cell with a bottom border");