// Check if icon order is reversed in a spreadsheet.

// How to determine if icon set displays icons in reverse order in a spreadsheet.

// Check if the icon set rule reverses the icon display order in a spreadsheet.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Values");
worksheet.GetRange("A2").SetValue(10);
worksheet.GetRange("A3").SetValue(20);
worksheet.GetRange("A4").SetValue(30);

let range = worksheet.GetRange("A2:A4");
let formatConditions = range.GetFormatConditions();
let iconCondition = formatConditions.AddIconSetCondition();

iconCondition.SetReverseOrder(true);

let isReversed = iconCondition.GetReverseOrder();
worksheet.GetRange("B1").SetValue("Icons reversed: " + isReversed);