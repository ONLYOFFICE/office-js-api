// This example sets the background color to the cell range with the previously created color object.

// How to color a cell.

// Get a range and apply a solid fill to its background color.

var oWorksheet = Api.GetActiveSheet();
oWorksheet.SetColumnWidth(0, 50);
oWorksheet.GetRange("A2").SetFillColor(Api.CreateColorFromRGB(255, 213, 191));
oWorksheet.GetRange("A2").SetValue("This is the cell with a color set to its background");
oWorksheet.GetRange("A4").SetValue("This is the cell with a default background color");