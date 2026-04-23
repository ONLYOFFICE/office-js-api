// Mark cells that contain one-of-a-kind entries differently from repeated ones in a spreadsheet.

// How do I visually separate unique items from duplicates across a data range in a spreadsheet?

// Color-code cells so repeated and distinct values are easy to tell apart in a spreadsheet.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Product Names");
worksheet.GetRange("A2").SetValue("Apple");
worksheet.GetRange("A3").SetValue("Banana");
worksheet.GetRange("A4").SetValue("Apple");
worksheet.GetRange("A5").SetValue("Orange");
worksheet.GetRange("A6").SetValue("Banana");
worksheet.GetRange("A7").SetValue("Grape");
worksheet.GetRange("A8").SetValue("Orange");
worksheet.GetRange("A9").SetValue("Kiwi");

let dataRange = worksheet.GetRange("A2:A9");
let formatConditions = dataRange.GetFormatConditions();
let uniqueValuesCondition = formatConditions.AddUniqueValues();

uniqueValuesCondition.GetFont().SetColor(Api.CreateColorFromRGB(255, 0, 0));