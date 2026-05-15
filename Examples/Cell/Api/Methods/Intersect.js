// Find the overlapping cells shared by two ranges in a spreadsheet.

// How do I get only the cells that belong to both of two selected ranges in a spreadsheet?

// Highlight the area where two ranges meet in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let range1 = worksheet.GetRange("A1:C5");
let range2 = worksheet.GetRange("B2:B4");
let range = Api.Intersect(range1, range2);
range.SetFillColor(Api.CreateColorFromRGB(255, 213, 191));