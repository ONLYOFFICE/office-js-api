// This example adds color scale conditional formatting to a range.

// How to add color scale conditional formatting rules to highlight cells with gradient colors.

// Add color scale conditional formatting to cells.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Performance Data");
worksheet.GetRange("A2").SetValue(15);
worksheet.GetRange("A3").SetValue(67);
worksheet.GetRange("A4").SetValue(23);
worksheet.GetRange("A5").SetValue(89);
worksheet.GetRange("A6").SetValue(45);
worksheet.GetRange("A7").SetValue(91);
worksheet.GetRange("A8").SetValue(12);
worksheet.GetRange("A9").SetValue(78);

let dataRange = worksheet.GetRange("A2:A9");

let formatConditions = dataRange.GetFormatConditions();

formatConditions.AddColorScale(3);
