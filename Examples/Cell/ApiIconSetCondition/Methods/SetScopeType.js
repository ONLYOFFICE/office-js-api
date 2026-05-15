// Define which cells an icon set formatting rule applies to in a spreadsheet.

// How do I control the scope of an icon set rule so it targets the right cells in a spreadsheet?

// Limit or expand the range of cells affected by an icon set rule based on selection or the entire sheet.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Metrics");
worksheet.GetRange("A2").SetValue(84);
worksheet.GetRange("A3").SetValue(64);
worksheet.GetRange("A4").SetValue(44);

let range = worksheet.GetRange("A2:A4");
let formatConditions = range.GetFormatConditions();

let iconCondition = formatConditions.AddIconSetCondition();

iconCondition.SetScopeType("xlSelectionScope");

let scopeType = iconCondition.GetScopeType();

worksheet.GetRange("B1").SetValue("New scope type: " + scopeType);