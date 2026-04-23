// Read the scope setting that controls how an icon set rule is applied in a spreadsheet.

// How do I find out the scope type of an icon set formatting rule in a spreadsheet?

// Determine the range of cells an icon set rule is scoped to cover in a spreadsheet.

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