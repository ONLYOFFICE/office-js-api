// Select the entire block of filled cells surrounding a given cell in a spreadsheet.

// How do I automatically expand a selection to cover all connected data around a cell in a spreadsheet?

// Highlight every adjacent occupied cell that belongs to the same data island in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("B2").SetValue("Data");
worksheet.GetRange("C2").SetValue("Values");
worksheet.GetRange("B3").SetValue("Item 1");
worksheet.GetRange("C3").SetValue(100);
worksheet.GetRange("B4").SetValue("Item 2");
worksheet.GetRange("C4").SetValue(200);
worksheet.GetRange("B5").SetValue("Item 3");
worksheet.GetRange("C5").SetValue(300);

let startRange = worksheet.GetRange("C3");
let currentRegion = startRange.CurrentRegion;
currentRegion.SetBorders("Top", "Thick", Api.CreateColorFromRGB(255, 111, 61));
currentRegion.SetBorders("Bottom", "Thick", Api.CreateColorFromRGB(255, 111, 61));
currentRegion.SetBorders("Left", "Thick", Api.CreateColorFromRGB(255, 111, 61));
currentRegion.SetBorders("Right", "Thick", Api.CreateColorFromRGB(255, 111, 61));