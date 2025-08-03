// This example shows how to get the entire rows containing a range.

// How to select entire rows from a range.

// Get a range, get its entire rows and fill them with color.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("C3:E5");
range.SetValue("Range");
range.SetFillColor(Api.CreateColorFromRGB(173, 216, 230));

let entireRows = range.EntireRow;
entireRows.SetFillColor(Api.CreateColorFromRGB(255, 213, 191));

worksheet.GetRange("A1").SetValue("Entire rows of C3:E5 are highlighted");
worksheet.GetRange("A1").AutoFit(false, true);
