// Switch a unique values formatting rule to highlight duplicates instead in a spreadsheet.

// How do I make a unique values rule target duplicates rather than unique entries in a spreadsheet?

// Choose whether a formatting rule marks repeated or one-of-a-kind values in a spreadsheet.

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

let settingBefore = uniqueValuesCondition.GetDupeUnique();
uniqueValuesCondition.SetDupeUnique("xlDuplicate");
let settingAfter = uniqueValuesCondition.GetDupeUnique();

uniqueValuesCondition.SetFillColor(Api.CreateColorFromRGB(255, 0, 0));

worksheet.GetRange("C1").SetValue("Setting before: " + settingBefore);
worksheet.GetRange("C2").SetValue("Setting after: " + settingAfter);
worksheet.GetRange("C3").SetValue("Now highlighting duplicates");