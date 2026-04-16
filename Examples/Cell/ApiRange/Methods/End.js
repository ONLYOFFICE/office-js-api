// Get a Range object that represents the end in the specified direction in the specified range in a spreadsheet.

// Get a left end part of a range and fill it with color in a spreadsheet.

// Get a specified direction end of a range in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("C4:D5");
range.End("xlToLeft").SetFillColor(Api.CreateColorFromRGB(255, 213, 191));