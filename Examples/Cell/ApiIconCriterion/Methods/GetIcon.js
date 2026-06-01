// Read which icon is assigned to a conditional formatting criterion in a spreadsheet.

// How do I find out what icon a formatting rule uses in a spreadsheet?

// Check the visual symbol tied to a specific condition in an icon set rule in a spreadsheet.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Quality");
worksheet.GetRange("A2").SetValue(90);
worksheet.GetRange("A3").SetValue(70);
worksheet.GetRange("A4").SetValue(40);

let range = worksheet.GetRange("A2:A4");
let formatConditions = range.GetFormatConditions();
let iconCondition = formatConditions.AddIconSetCondition();

let criteria = iconCondition.GetIconCriteria();
let firstIcon = criteria[0].GetIcon();

worksheet.GetRange("B1").SetValue("First criterion icon: " + firstIcon);