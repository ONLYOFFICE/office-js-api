// This example gets the text operator from a text-based conditional formatting rule.

// How to retrieve text operators from text-based conditional formatting rules.

// Get conditional formatting rule text operator.

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

let textOperator = condition1.GetTextOperator();

worksheet.GetRange("C1").SetValue("Text operator:");
worksheet.GetRange("C2").SetValue(textOperator ? textOperator : "None");
