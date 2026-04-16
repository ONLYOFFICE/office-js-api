// Get a Range object that represents the columns in the specified range in a spreadsheet.

// How to get columns from a range in a spreadsheet.

// Get a range, get its first two columns and fill them with a color in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A1:C3");
range.GetCols(2).SetFillColor(Api.CreateColorFromRGB(255, 213, 191));