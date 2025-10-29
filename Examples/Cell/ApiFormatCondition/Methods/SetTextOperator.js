// This example sets the text operator for a text-based conditional formatting rule.

// How to change text operators in text-based conditional formatting rules.

// Set conditional formatting rule text operator.

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

worksheet.GetRange("C1").SetValue("Original operator:");
worksheet.GetRange("C2").SetValue(condition1.GetTextOperator() || "None");

condition1.SetTextOperator("xlBeginsWith");

worksheet.GetRange("C4").SetValue("New operator:");
worksheet.GetRange("C5").SetValue(condition1.GetTextOperator() || "None");
