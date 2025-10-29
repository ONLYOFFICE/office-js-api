// This example sets the scope type of color scale formatting rule.

// How to change the scope type of color scale conditional formatting.

// Set color scale scope type.

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

worksheet.GetRange("C1").SetValue("Scope before:");
worksheet.GetRange("C2").SetValue(colorScale.GetScopeType());

colorScale.SetScopeType("xlDataFieldScope");

worksheet.GetRange("D1").SetValue("Scope after:");
worksheet.GetRange("D2").SetValue(colorScale.GetScopeType());
