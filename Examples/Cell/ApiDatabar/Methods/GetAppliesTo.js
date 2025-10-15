// This example demonstrates getting the range to which a data bar formatting rule applies.

// How to retrieve the range that a data bar conditional formatting affects.

// Get the range to which the data bar formatting rule applies.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Sales Data");
worksheet.GetRange("A2").SetValue(100);
worksheet.GetRange("A3").SetValue(250);
worksheet.GetRange("A4").SetValue(150);

let dataRange = worksheet.GetRange("A2:A4");
let formatConditions = dataRange.GetFormatConditions();

let dataBar = formatConditions.AddDatabar();

let appliesTo = dataBar.GetAppliesTo();

worksheet.GetRange("C1").SetValue("Data bar applies to:");
worksheet.GetRange("C2").SetValue(appliesTo.GetAddress());
