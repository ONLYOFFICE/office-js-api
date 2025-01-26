// This example sets the border to the cell with the parameters specified.
let worksheet = Api.GetActiveSheet();
worksheet.SetColumnWidth(0, 50);
worksheet.GetRange("A2").SetBorders("Bottom", "Thick", Api.CreateColorFromRGB(255, 111, 61));
worksheet.GetRange("A2").SetValue("This is a cell with a bottom border");