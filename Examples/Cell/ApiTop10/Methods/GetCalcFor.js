// This example shows how to get the calculation scope for top 10 condition.

// How to retrieve the scope setting that determines how the condition is calculated.

// Get the calculation scope for the top 10 rule.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Sales Data");
worksheet.GetRange("A2").SetValue(120);
worksheet.GetRange("A3").SetValue(95);
worksheet.GetRange("A4").SetValue(180);
worksheet.GetRange("A5").SetValue(75);

let range = worksheet.GetRange("A2:A5");
let formatConditions = range.GetFormatConditions();
let top10Condition = formatConditions.AddTop10();

let calcFor = top10Condition.GetCalcFor();
worksheet.GetRange("B1").SetValue("Calculation scope: " + calcFor);
