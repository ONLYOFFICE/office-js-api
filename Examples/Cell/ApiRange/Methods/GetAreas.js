// This example shows how to get a collection of the ranges.
let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("B1:D1");
range.SetValue("1");
range.Select();
let areas = range.GetAreas();
let count = areas.GetCount();
range = worksheet.GetRange("A5");
range.SetValue("The number of ranges in the areas: ");
range.AutoFit(false, true);
worksheet.GetRange("B5").SetValue(count);