// This example demonstrates setting the scope type of a data bar formatting rule.

// How to change the scope type of a data bar conditional formatting.

// Set the scope type of the data bar formatting rule.

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
