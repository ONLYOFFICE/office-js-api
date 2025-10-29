// This example sets the text value for a text-based conditional formatting rule.

// How to change text values in text-based conditional formatting rules.

// Set conditional formatting rule text value.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Product Names");
worksheet.GetRange("A2").SetValue("Apple");
worksheet.GetRange("A3").SetValue("Banana");
worksheet.GetRange("A4").SetValue("Orange");
worksheet.GetRange("A5").SetValue("Grape");
worksheet.GetRange("A6").SetValue("Peach");

let dataRange = worksheet.GetRange("A2:A6");

let formatConditions = dataRange.GetFormatConditions();

let condition1 = formatConditions.Add("xlTextString", "xlContains", "Apple");
condition1.SetFillColor(Api.CreateColorFromRGB(255, 0, 0));

worksheet.GetRange("C1").SetValue("Original text:");
worksheet.GetRange("C2").SetValue(condition1.GetText());

condition1.SetText("Grape");

worksheet.GetRange("C4").SetValue("New text:");
worksheet.GetRange("C5").SetValue(condition1.GetText());
