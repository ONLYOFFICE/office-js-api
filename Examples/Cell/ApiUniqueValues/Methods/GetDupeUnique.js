// Read whether a conditional formatting rule highlights unique or duplicate values in a spreadsheet.

// How do I tell if a formatting rule is set to mark unique entries or duplicates in a spreadsheet?

// Verify the highlight mode of a unique-values rule to see which kind of entries it targets in a spreadsheet.

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