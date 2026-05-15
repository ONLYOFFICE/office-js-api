// Check whether an icon set rule is linked to a pivot table condition in a spreadsheet.

// How do I find out if an icon set formatting rule is tied to a pivot table in a spreadsheet?

// Confirm whether a pivot table condition is associated with an icon set formatting rule in a spreadsheet.

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