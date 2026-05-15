// Read which icon set is used by a conditional formatting rule in a spreadsheet.

// How do I find out which icon set a formatting rule is using in a spreadsheet?

// Identify the icon collection assigned to a cell range's formatting rule in a spreadsheet.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Score");
worksheet.GetRange("A2").SetValue(85);
worksheet.GetRange("A3").SetValue(70);
worksheet.GetRange("A4").SetValue(45);

let range = worksheet.GetRange("A2:A4");
let formatConditions = range.GetFormatConditions();
let iconCondition = formatConditions.AddIconSetCondition();

iconCondition.SetIconSet("xl3TrafficLights1");

let iconSet = iconCondition.GetIconSet();
worksheet.GetRange("B1").SetValue("Current icon set: " + iconSet);