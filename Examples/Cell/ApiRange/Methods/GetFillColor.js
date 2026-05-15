// Read the background color of a cell range in a spreadsheet.

// How do I find out what background color a cell has in a spreadsheet?

// Copy a cell's fill color and apply it to another cell in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.SetColumnWidth(0, 60);
let range = worksheet.GetRange("A1");
range.SetFillColor(Api.CreateColorFromRGB(255, 213, 191));
range.SetValue("This is the cell with a color set to its background.");
let fillColor = range.GetFillColor();
worksheet.GetRange("A3").SetValue("This is another cell with the same color set to its background");
worksheet.GetRange("A3").SetFillColor(fillColor);