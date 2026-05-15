// Display small status icons inside cells to indicate whether values are low, medium, or high in a spreadsheet.

// How do I place visual symbols next to numbers to show their relative standing at a glance in a spreadsheet?

// Represent data tiers with icons so readers can judge cell values without reading exact numbers in a spreadsheet.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Progress Status");
worksheet.GetRange("A2").SetValue(10);
worksheet.GetRange("A3").SetValue(45);
worksheet.GetRange("A4").SetValue(75);
worksheet.GetRange("A5").SetValue(25);
worksheet.GetRange("A6").SetValue(90);
worksheet.GetRange("A7").SetValue(60);
worksheet.GetRange("A8").SetValue(35);
worksheet.GetRange("A9").SetValue(80);

let dataRange = worksheet.GetRange("A2:A9");
let formatConditions = dataRange.GetFormatConditions();
formatConditions.AddIconSetCondition();