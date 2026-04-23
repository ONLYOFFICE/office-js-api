// Define how the lower boundary of a data bar scale is calculated in a spreadsheet.

// How do I choose what determines the shortest possible data bar in a spreadsheet?

// Anchor the bottom of a data bar range to a percentage, fixed number, or automatic value in a spreadsheet.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Sales Data");
worksheet.GetRange("A2").SetValue(100);
worksheet.GetRange("A3").SetValue(250);
worksheet.GetRange("A4").SetValue(150);
worksheet.GetRange("A5").SetValue(300);
worksheet.GetRange("A6").SetValue(75);

let dataRange = worksheet.GetRange("A2:A6");
let formatConditions = dataRange.GetFormatConditions();

let dataBar = formatConditions.AddDatabar();

worksheet.GetRange("C1").SetValue("Before:");
worksheet.GetRange("C2").SetValue(dataBar.GetMinPointType());

dataBar.SetMinPointType("xlConditionValuePercent");

worksheet.GetRange("C3").SetValue("After:");
worksheet.GetRange("C4").SetValue(dataBar.GetMinPointType());