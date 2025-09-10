// This example sets the scope type of the top 10 conditional formatting rule.

// How to set the scope of conditional formatting rules.

// Set top 10 rule scope type.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Sales Data");
worksheet.GetRange("A2").SetValue(100);
worksheet.GetRange("A3").SetValue(250);
worksheet.GetRange("A4").SetValue(150);
worksheet.GetRange("A5").SetValue(300);
worksheet.GetRange("A6").SetValue(75);

let dataRange = worksheet.GetRange("A2:A6");
let formatConditions = dataRange.GetFormatConditions();

let condition1 = formatConditions.AddTop10();
condition1.SetFillColor(Api.CreateColorFromRGB(255, 255, 0));

let scopeBefore = condition1.GetScopeType();
condition1.SetScopeType("xlSelectionScope");
let scopeAfter = condition1.GetScopeType();

worksheet.GetRange("C1").SetValue("Scope before: " + scopeBefore);
worksheet.GetRange("C2").SetValue("Scope after: " + scopeAfter);
