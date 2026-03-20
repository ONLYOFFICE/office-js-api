// This example adds data bar conditional formatting to a range.

// How to add data bar conditional formatting rules to visualize cell values with bars.

// Add data bar conditional formatting to cells.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Budget Progress");
worksheet.GetRange("A2").SetValue(25);
worksheet.GetRange("A3").SetValue(85);
worksheet.GetRange("A4").SetValue(60);
worksheet.GetRange("A5").SetValue(95);
worksheet.GetRange("A6").SetValue(40);
worksheet.GetRange("A7").SetValue(75);
worksheet.GetRange("A8").SetValue(30);
worksheet.GetRange("A9").SetValue(90);

let dataRange = worksheet.GetRange("A2:A9");

let formatConditions = dataRange.GetFormatConditions();

formatConditions.AddDatabar();
