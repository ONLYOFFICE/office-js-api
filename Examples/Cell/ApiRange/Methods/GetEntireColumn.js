// Select full columns that overlap with a given range in a spreadsheet.

// How do I highlight all the columns that a range belongs to in a spreadsheet?

// Fill the complete columns of a range with a background color in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("C3:E5");
range.SetValue("Range");
range.SetFillColor(Api.CreateColorFromRGB(173, 216, 230));

let entireColumns = range.EntireColumn;
entireColumns.SetFillColor(Api.CreateColorFromRGB(255, 213, 191));

worksheet.GetRange("A1").SetValue("Entire columns of C3:E5 are highlighted");
worksheet.GetRange("A1").AutoFit(false, true);