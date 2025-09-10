// This example shows how to get parent range from above average rule.

// How to retrieve the parent object of above average conditional formatting.

// Get the parent object that contains the above average rule.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Data Set");
worksheet.GetRange("A2").SetValue(45);
worksheet.GetRange("A3").SetValue(67);
worksheet.GetRange("A4").SetValue(89);
worksheet.GetRange("A5").SetValue(23);

let dataRange = worksheet.GetRange("A2:A5");
let formatConditions = dataRange.GetFormatConditions();
let aboveAverageCondition = formatConditions.AddAboveAverage();

let parentRange = aboveAverageCondition.GetParent();
worksheet.GetRange("C1").SetValue("Parent range:");
worksheet.GetRange("C2").SetValue(parentRange.GetAddress());
