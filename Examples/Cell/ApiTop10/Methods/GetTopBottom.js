// This example shows how to get the top/bottom setting for top 10 condition.

// How to determine if the condition evaluates top or bottom values.

// Get the top/bottom direction setting from the top 10 rule.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Test Scores");
worksheet.GetRange("A2").SetValue(88);
worksheet.GetRange("A3").SetValue(76);
worksheet.GetRange("A4").SetValue(94);
worksheet.GetRange("A5").SetValue(82);

let range = worksheet.GetRange("A2:A5");
let formatConditions = range.GetFormatConditions();
let top10Condition = formatConditions.AddTop10();

let topBottom = top10Condition.GetTopBottom();
worksheet.GetRange("B1").SetValue("Direction: " + topBottom);
