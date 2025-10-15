// This example shows how to set the top/bottom direction for top 10 condition.

// How to configure whether the condition evaluates top or bottom values.

// Set the top/bottom direction for the top 10 rule.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Revenue");
worksheet.GetRange("A2").SetValue(15000);
worksheet.GetRange("A3").SetValue(22000);
worksheet.GetRange("A4").SetValue(8000);
worksheet.GetRange("A5").SetValue(18000);

let range = worksheet.GetRange("A2:A5");
let formatConditions = range.GetFormatConditions();
let top10Condition = formatConditions.AddTop10();

worksheet.GetRange("B1").SetValue("Before: Top values");
top10Condition.SetTopBottom("xlTop10Bottom");
worksheet.GetRange("B2").SetValue("After: Bottom values");
