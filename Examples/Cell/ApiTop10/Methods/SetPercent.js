// Set the percentage mode for top 10 condition in a spreadsheet.

// How to configure if the condition uses percentage values instead of count values in a spreadsheet.

// Set the percentage mode for the top 10 rule in a spreadsheet.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Grades");
worksheet.GetRange("A2").SetValue(78);
worksheet.GetRange("A3").SetValue(85);
worksheet.GetRange("A4").SetValue(92);
worksheet.GetRange("A5").SetValue(69);

let range = worksheet.GetRange("A2:A5");
let formatConditions = range.GetFormatConditions();
let top10Condition = formatConditions.AddTop10();

worksheet.GetRange("B1").SetValue("Before: Count mode");
top10Condition.SetPercent(true);
worksheet.GetRange("B2").SetValue("After: Percentage mode");