// Read the comparison type used by a text-based conditional formatting rule in a spreadsheet.

// How do I find out whether a text formatting rule checks for contains, begins with, or ends with in a spreadsheet?

// Identify the matching method a text-based formatting rule relies on in a spreadsheet.

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