// This example demonstrates getting the pivot table condition of an icon set rule.

// How to retrieve pivot table condition settings from icon set conditional formatting.

// Get the pivot table condition object from the icon set rule.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Performance");
worksheet.GetRange("A2").SetValue(92);
worksheet.GetRange("A3").SetValue(72);
worksheet.GetRange("A4").SetValue(52);

let range = worksheet.GetRange("A2:A4");
let formatConditions = range.GetFormatConditions();

let iconCondition = formatConditions.AddIconSetCondition();

let ptCondition = iconCondition.GetPTCondition();

worksheet.GetRange("B1").SetValue("PT Condition: " + (ptCondition !== null ? "Yes" : "No"));
