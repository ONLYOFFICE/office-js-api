// This example shows how to get a Range object that represents the end in the specified direction in the specified range.

// Get a left end part of a range and fill it with color.

// Get a specified direction end of a range.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("C4:D5");
range.End("xlToLeft").SetFillColor(Api.CreateColorFromRGB(255, 213, 191));