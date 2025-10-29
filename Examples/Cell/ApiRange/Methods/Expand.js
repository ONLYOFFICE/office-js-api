// This example shows how to get the current region around a range.

// How to get the contiguous data region.

// Get a range, find its current region and highlight it.

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
