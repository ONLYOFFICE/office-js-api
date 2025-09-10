// This example shows how to set the calculation scope for top 10 condition.

// How to configure the scope setting that determines how the condition is calculated.

// Set the calculation scope for the top 10 rule.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Performance");
worksheet.GetRange("A2").SetValue(85);
worksheet.GetRange("A3").SetValue(92);
worksheet.GetRange("A4").SetValue(78);
worksheet.GetRange("A5").SetValue(96);

let range = worksheet.GetRange("A2:A5");
let formatConditions = range.GetFormatConditions();
let top10Condition = formatConditions.AddTop10();

worksheet.GetRange("B1").SetValue("Before: xlAllValues");
top10Condition.SetCalcFor("xlColItems");
worksheet.GetRange("B2").SetValue("After: xlColItems");
