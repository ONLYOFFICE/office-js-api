// Shift a range by a number of rows and columns to reach a new position in a spreadsheet.

// How do I move a selection to a different area by stepping over rows and columns in a spreadsheet?

// Highlight the displaced range with a background color to make its new position visible in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let originalRange = worksheet.GetRange("C3:D4");
originalRange.SetValue("Original");
originalRange.SetFillColor(Api.CreateColorFromRGB(173, 216, 230));

let offsetRange = originalRange.Offset(2, 1);
offsetRange.SetValue("Offset");
offsetRange.SetFillColor(Api.CreateColorFromRGB(255, 213, 191));