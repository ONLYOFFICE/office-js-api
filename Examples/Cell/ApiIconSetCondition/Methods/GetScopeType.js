// This example demonstrates getting the scope type of an icon set rule.

// How to retrieve the scope type setting from icon set conditional formatting.

// Get the scope type of the icon set rule.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Results");
worksheet.GetRange("A2").SetValue(87);
worksheet.GetRange("A3").SetValue(67);
worksheet.GetRange("A4").SetValue(47);

let range = worksheet.GetRange("A2:A4");
let formatConditions = range.GetFormatConditions();

let iconCondition = formatConditions.AddIconSetCondition();

let scopeType = iconCondition.GetScopeType();

worksheet.GetRange("B1").SetValue("Scope type: " + scopeType);
