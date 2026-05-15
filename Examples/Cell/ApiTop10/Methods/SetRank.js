// Adjust how many top or bottom values a conditional formatting rule highlights in a spreadsheet.

// How do I choose the exact number of leading values to mark with a formatting rule in a spreadsheet?

// Narrow the spotlight to only the top 2 scores by updating the rank threshold in a spreadsheet.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Test Scores");
worksheet.GetRange("A2").SetValue(88);
worksheet.GetRange("A3").SetValue(92);
worksheet.GetRange("A4").SetValue(76);
worksheet.GetRange("A5").SetValue(94);

let range = worksheet.GetRange("A2:A5");
let formatConditions = range.GetFormatConditions();
let top10Condition = formatConditions.AddTop10();

worksheet.GetRange("B1").SetValue("Before: Top 10 values");
top10Condition.SetRank(2);
worksheet.GetRange("B2").SetValue("After: Top 2 values");