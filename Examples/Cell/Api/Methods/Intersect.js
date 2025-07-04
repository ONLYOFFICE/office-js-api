// This example shows how to get the ApiRange object that represents the rectangular intersection of two or more ranges.

// How to find intersection of two ranges and highlight it.

// Find common cells of two ranges and fill them with a color.

let worksheet = Api.GetActiveSheet();
let range1 = worksheet.GetRange("A1:C5");
let range2 = worksheet.GetRange("B2:B4");
let range = Api.Intersect(range1, range2);
range.SetFillColor(Api.CreateColorFromRGB(255, 213, 191));