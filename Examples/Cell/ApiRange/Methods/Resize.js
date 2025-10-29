// This example shows how to resize a range to a different number of rows and columns.

// How to resize a range.

// Get a range, resize it and fill the resized range with color.

let worksheet = Api.GetActiveSheet();
let originalRange = worksheet.GetRange("B2:C3");
originalRange.SetValue("Original");
originalRange.SetFillColor(Api.CreateColorFromRGB(173, 216, 230));

let resizedRange = originalRange.Resize(originalRange.Rows.Count + 2, originalRange.Columns.Count + 1);
resizedRange.SetBorders("InsideHorizontal", "Thick", Api.CreateColorFromRGB(255, 111, 61));
resizedRange.SetBorders("InsideVertical", "Thick", Api.CreateColorFromRGB(255, 111, 61));
