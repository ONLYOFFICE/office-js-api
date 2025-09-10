// This example demonstrates setting the StopIfTrue setting of a unique values conditional formatting rule.

// How to configure if rule evaluation stops when this unique values rule is true.

// Set the StopIfTrue setting for the unique values rule.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Data");
worksheet.GetRange("A2").SetValue("Apple");
worksheet.GetRange("A3").SetValue("Banana");
worksheet.GetRange("A4").SetValue("Apple");
worksheet.GetRange("A5").SetValue("Orange");

let range = worksheet.GetRange("A2:A5");
let formatConditions = range.GetFormatConditions();
let uniqueValuesCondition = formatConditions.AddUniqueValues();

uniqueValuesCondition.SetStopIfTrue(true);

let stopIfTrue = uniqueValuesCondition.GetStopIfTrue();

worksheet.GetRange("C1").SetValue("Stop if true set to:");
worksheet.GetRange("C2").SetValue(stopIfTrue);
