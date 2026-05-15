// Read the background color set by a unique-values conditional formatting rule in a spreadsheet.

// How do I find out what fill color a unique-values rule applies to matching cells in a spreadsheet?

// Inspect the highlight color of a unique-values rule to confirm its appearance in a spreadsheet.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Data");
worksheet.GetRange("A2").SetValue("Apple");
worksheet.GetRange("A3").SetValue("Banana");
worksheet.GetRange("A4").SetValue("Apple");
worksheet.GetRange("A5").SetValue("Orange");

let range = worksheet.GetRange("A2:A5");
let formatConditions = range.GetFormatConditions();
let uniqueValuesCondition = formatConditions.AddUniqueValues();

uniqueValuesCondition.SetFillColor(Api.CreateColorFromRGB(255, 255, 0));

let fillColor = uniqueValuesCondition.GetFillColor();
let rgbValue = fillColor.GetRGB();

worksheet.GetRange("C1").SetValue("Fill Color RGB:");
worksheet.GetRange("C2").SetValue(rgbValue);