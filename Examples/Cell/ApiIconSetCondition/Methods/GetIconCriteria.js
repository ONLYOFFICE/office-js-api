// Retrieve all icon criteria from an icon set conditional formatting rule in a spreadsheet.

// How do I access each individual threshold and icon setting within an icon set rule in a spreadsheet?

// List the full set of criteria that control which icon each cell receives under a formatting rule in a spreadsheet.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Performance");
worksheet.GetRange("A2").SetValue(95);
worksheet.GetRange("A3").SetValue(75);
worksheet.GetRange("A4").SetValue(55);

let range = worksheet.GetRange("A2:A4");
let formatConditions = range.GetFormatConditions();
let iconCondition = formatConditions.AddIconSetCondition();

let criteria = iconCondition.GetIconCriteria();
worksheet.GetRange("B1").SetValue("Number of criteria: " + criteria.length);