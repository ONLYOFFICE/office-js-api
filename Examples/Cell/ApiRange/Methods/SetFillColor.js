// Fill the background of a cell range with a color in a spreadsheet.

// How do I set a background color on a group of cells in a spreadsheet?

// Paint the background of cells with a chosen color to visually distinguish them in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.SetColumnWidth(0, 50);
worksheet.GetRange("A2").SetFillColor(Api.CreateColorFromRGB(255, 213, 191));
worksheet.GetRange("A2").SetValue("This is the cell with a color set to its background");
worksheet.GetRange("A4").SetValue("This is the cell with a default background color");