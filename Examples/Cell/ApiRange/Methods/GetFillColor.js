// This example shows how to get the background color for the cell range.

// How to find out a range background color.

// Get a range get, set its background color using RGB value and show it in the worksheet.

let worksheet = Api.GetActiveSheet();
worksheet.SetColumnWidth(0, 60);
let range = worksheet.GetRange("A1");
range.SetFillColor(Api.CreateColorFromRGB(255, 213, 191));
range.SetValue("This is the cell with a color set to its background.");
let fillColor = range.GetFillColor();
worksheet.GetRange("A3").SetValue("This is another cell with the same color set to its background");
worksheet.GetRange("A3").SetFillColor(fillColor);