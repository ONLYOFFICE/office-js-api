// Read whether a top 10 rule highlights a percentage of values or a fixed count in a spreadsheet.

// How do I check if a top 10 conditional formatting rule works by percentage in a spreadsheet?

// Confirm whether the highlight threshold is expressed as a percent or an item count in a spreadsheet.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Values");
worksheet.GetRange("A2").SetValue(45);
worksheet.GetRange("A3").SetValue(67);
worksheet.GetRange("A4").SetValue(89);
worksheet.GetRange("A5").SetValue(23);

let range = worksheet.GetRange("A2:A5");
let formatConditions = range.GetFormatConditions();
let top10Condition = formatConditions.AddTop10();

let isPercent = top10Condition.GetPercent();
worksheet.GetRange("B1").SetValue("Percentage mode: " + isPercent);