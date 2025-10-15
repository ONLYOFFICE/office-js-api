// This example shows how to get a range offset from the current range.

// How to offset a range by rows and columns.

// Get a range, offset it and fill the offset range with color.

let worksheet = Api.GetActiveSheet();
let originalRange = worksheet.GetRange("C3:D4");
originalRange.SetValue("Original");
originalRange.SetFillColor(Api.CreateColorFromRGB(173, 216, 230));

let offsetRange = originalRange.Offset(2, 1);
offsetRange.SetValue("Offset");
offsetRange.SetFillColor(Api.CreateColorFromRGB(255, 213, 191));
