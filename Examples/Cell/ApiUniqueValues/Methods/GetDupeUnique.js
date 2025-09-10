// This example demonstrates getting the duplicate/unique value setting from a unique values conditional formatting rule.

// How to check whether rule highlights unique or duplicate values.

// Get the duplicate/unique setting from unique values rule.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Data");
worksheet.GetRange("A2").SetValue("Apple");
worksheet.GetRange("A3").SetValue("Banana");
worksheet.GetRange("A4").SetValue("Apple");
worksheet.GetRange("A5").SetValue("Orange");
worksheet.GetRange("A6").SetValue("Banana");

let range = worksheet.GetRange("A2:A6");
let formatConditions = range.GetFormatConditions();
let uniqueValuesCondition = formatConditions.AddUniqueValues();

uniqueValuesCondition.SetFillColor(Api.CreateColorFromRGB(0, 255, 0));

let dupeUniqueSetting = uniqueValuesCondition.GetDupeUnique();

worksheet.GetRange("C1").SetValue("DupeUnique setting:");
worksheet.GetRange("C2").SetValue(dupeUniqueSetting);
worksheet.GetRange("C3").SetValue("(xlUnique = unique, xlDuplicate = duplicate)");