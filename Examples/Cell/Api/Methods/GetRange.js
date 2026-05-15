// Select a group of cells by their address and apply a background color in a spreadsheet.

// How do I target a specific block of cells using their address to change formatting in a spreadsheet?

// Highlight a defined cell area by providing its coordinates and setting a fill color in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let range = Api.GetRange("A1:C1");
range.SetFillColor(Api.CreateColorFromRGB(255, 213, 191));
worksheet.GetRange("A3").SetValue("The color was set to the background of cells A1:C1.");