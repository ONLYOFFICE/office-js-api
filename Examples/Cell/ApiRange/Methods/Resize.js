// Expand or shrink a range by changing its row and column count in a spreadsheet.

// How do I adjust the size of a selected range to cover more or fewer cells in a spreadsheet?

// Stretch an existing range to a larger area and mark its boundaries with borders in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let originalRange = worksheet.GetRange("B2:C3");
originalRange.SetValue("Original");
originalRange.SetFillColor(Api.CreateColorFromRGB(173, 216, 230));

let resizedRange = originalRange.Resize(originalRange.Rows.Count + 2, originalRange.Columns.Count + 1);
resizedRange.SetBorders("InsideHorizontal", "Thick", Api.CreateColorFromRGB(255, 111, 61));
resizedRange.SetBorders("InsideVertical", "Thick", Api.CreateColorFromRGB(255, 111, 61));