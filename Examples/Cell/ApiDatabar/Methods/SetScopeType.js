// Define which cells a data bar formatting rule applies to within a range in a spreadsheet.

// How do I control whether a data bar rule covers the entire table or only the selected cells in a spreadsheet?

// Narrow or broaden the reach of a data bar rule by choosing its application scope in a spreadsheet.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Sales Data");
worksheet.GetRange("A2").SetValue(100);
worksheet.GetRange("A3").SetValue(250);

let dataRange = worksheet.GetRange("A2:A3");
let formatConditions = dataRange.GetFormatConditions();

let dataBar = formatConditions.AddDatabar();

dataBar.SetScopeType("xlSelectionScope");

let scopeType = dataBar.GetScopeType();

worksheet.GetRange("C1").SetValue("New scope type:");
worksheet.GetRange("C2").SetValue(scopeType);