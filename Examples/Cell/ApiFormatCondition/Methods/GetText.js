// This example gets the text value from a text-based conditional formatting rule.

// How to retrieve text values from text-based conditional formatting rules.

// Get conditional formatting rule text value.

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

let textValue = condition1.GetText();

worksheet.GetRange("C1").SetValue("Text value:");
worksheet.GetRange("C2").SetValue(textValue);
