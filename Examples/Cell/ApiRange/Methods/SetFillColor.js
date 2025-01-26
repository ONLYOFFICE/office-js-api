// This example sets the background color to the cell range with the previously created color object.
let worksheet = Api.GetActiveSheet();
worksheet.SetColumnWidth(0, 50);
worksheet.GetRange("A2").SetFillColor(Api.CreateColorFromRGB(255, 213, 191));
worksheet.GetRange("A2").SetValue("This is the cell with a color set to its background");
worksheet.GetRange("A4").SetValue("This is the cell with a default background color");