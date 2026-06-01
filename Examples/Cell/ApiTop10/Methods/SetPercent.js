// Switch a top 10 rule from counting items to using a percentage threshold in a spreadsheet.

// How do I highlight the top percentage of values instead of a fixed count in a spreadsheet?

// Target the top portion of data by enabling percentage mode on a highlight rule in a spreadsheet.

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