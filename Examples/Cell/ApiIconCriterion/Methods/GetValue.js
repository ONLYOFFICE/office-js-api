// This example shows how to get the value of an icon criterion.

// How to retrieve the threshold value from an icon set criterion.

// Get the value used for criterion threshold comparison.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Data");
worksheet.GetRange("A2").SetValue(100);
worksheet.GetRange("A3").SetValue(75);
worksheet.GetRange("A4").SetValue(50);

let range = worksheet.GetRange("A2:A4");
let formatConditions = range.GetFormatConditions();
let iconCondition = formatConditions.AddIconSetCondition();

let criteria = iconCondition.GetIconCriteria();
let secondCriterion = criteria[1];
let criterionValue = secondCriterion.GetValue();

worksheet.GetRange("B1").SetValue("Second criterion value: " + criterionValue);
