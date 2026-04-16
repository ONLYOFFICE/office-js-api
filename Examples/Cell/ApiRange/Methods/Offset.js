// Get a range offset from the current range in a spreadsheet.

// How to offset a range by rows and columns in a spreadsheet.

// Get a range, offset it and fill the offset range with color in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let originalRange = worksheet.GetRange("C3:D4");
originalRange.SetValue("Original");
originalRange.SetFillColor(Api.CreateColorFromRGB(173, 216, 230));

let offsetRange = originalRange.Offset(2, 1);
offsetRange.SetValue("Offset");
offsetRange.SetFillColor(Api.CreateColorFromRGB(255, 213, 191));