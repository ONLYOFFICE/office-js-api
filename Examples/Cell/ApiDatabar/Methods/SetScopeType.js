// Define which cells a data bar formatting rule applies to within a range in a spreadsheet.

// How do I extend a data bar rule from its range to the entire worksheet in a spreadsheet?

// Set the worksheet scope for a data bar rule created on a range and display the new scope in a spreadsheet.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Sales Data");
worksheet.GetRange("A2").SetValue(100);
worksheet.GetRange("A3").SetValue(250);

let dataRange = worksheet.GetRange("A2:A3");
let formatConditions = dataRange.GetFormatConditions();

let dataBar = formatConditions.AddDatabar();

dataBar.SetScopeType("xlDataFieldScope");

let scopeType = dataBar.GetScopeType();

worksheet.GetRange("C1").SetValue("New scope type:");
worksheet.GetRange("C2").SetValue(scopeType);