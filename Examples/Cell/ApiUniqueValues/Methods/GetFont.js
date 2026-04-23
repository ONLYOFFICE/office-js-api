// Access the font settings defined by a unique-values conditional formatting rule in a spreadsheet.

// How do I retrieve and modify the text style applied by a unique-values rule in a spreadsheet?

// Adjust the font appearance of cells highlighted by a unique-values rule in a spreadsheet.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Data");
worksheet.GetRange("A2").SetValue("Apple");
worksheet.GetRange("A3").SetValue("Banana");
worksheet.GetRange("A4").SetValue("Apple");
worksheet.GetRange("A5").SetValue("Orange");

let range = worksheet.GetRange("A2:A5");
let formatConditions = range.GetFormatConditions();
let uniqueValuesCondition = formatConditions.AddUniqueValues();

let font = uniqueValuesCondition.GetFont();
font.SetColor(Api.CreateColorFromRGB(255, 0, 0));

worksheet.GetRange("C1").SetValue("Font formatting applied");