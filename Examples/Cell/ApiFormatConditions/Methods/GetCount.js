// This example gets the count of conditional formatting rules in a range.

// How to get the number of conditional formatting rules applied to cells.

// Get count of conditional formatting rules.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Sample Data");
worksheet.GetRange("A2").SetValue(10);
worksheet.GetRange("A3").SetValue(45);
worksheet.GetRange("A4").SetValue(75);
worksheet.GetRange("A5").SetValue(25);
worksheet.GetRange("A6").SetValue(90);

let dataRange = worksheet.GetRange("A2:A6");

let formatConditions = dataRange.GetFormatConditions();

formatConditions.AddDatabar();

worksheet.GetRange("B1").SetValue("Count: " + formatConditions.GetCount());
