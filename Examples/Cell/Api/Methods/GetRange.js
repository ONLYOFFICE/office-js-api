// Get the cell range object by the range reference in a spreadsheet.

// How to get a range object using an address in a spreadsheet.

// Update a rabge knowing its cell address.

let worksheet = Api.GetActiveSheet();
let range = Api.GetRange("A1:C1");
range.SetFillColor(Api.CreateColorFromRGB(255, 213, 191));
worksheet.GetRange("A3").SetValue("The color was set to the background of cells A1:C1.");