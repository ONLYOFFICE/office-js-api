// Get the percentage mode for top 10 condition in a spreadsheet.

// How to check if the condition uses percentage values instead of count values in a spreadsheet.

// Get the percentage mode setting for the top 10 rule in a spreadsheet.

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