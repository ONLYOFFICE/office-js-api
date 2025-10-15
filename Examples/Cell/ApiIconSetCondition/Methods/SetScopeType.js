// This example demonstrates setting the scope type of an icon set rule.

// How to configure the scope type setting for icon set conditional formatting.

// Set the scope type of the icon set rule.

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
