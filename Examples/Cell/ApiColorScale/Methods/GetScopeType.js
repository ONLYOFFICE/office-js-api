// Retrieve the scope setting that controls how a color gradient rule is applied across cells in a spreadsheet.

// How do I find out whether a color scale rule applies to the whole range or only selected parts in a spreadsheet?

// Determine the coverage mode of a color gradient condition to understand its boundaries in a spreadsheet.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Sales Data");
worksheet.GetRange("A2").SetValue(100);
worksheet.GetRange("A3").SetValue(250);
worksheet.GetRange("A4").SetValue(150);
worksheet.GetRange("A5").SetValue(300);
worksheet.GetRange("A6").SetValue(75);

let dataRange = worksheet.GetRange("A2:A6");

let formatConditions = dataRange.GetFormatConditions();

let colorScale = formatConditions.AddColorScale();

let scopeType = colorScale.GetScopeType();

worksheet.GetRange("C1").SetValue("Scope type:");
worksheet.GetRange("C2").SetValue(scopeType);