// This example shows how to check if only icons are displayed.

// How to determine if icon set displays only icons without cell values.

// Check if the icon set rule shows only icons.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Progress");
worksheet.GetRange("A2").SetValue(100);
worksheet.GetRange("A3").SetValue(50);
worksheet.GetRange("A4").SetValue(25);

let range = worksheet.GetRange("A2:A4");
let formatConditions = range.GetFormatConditions();
let iconCondition = formatConditions.AddIconSetCondition();

iconCondition.SetShowIconOnly(true);

let showIconOnly = iconCondition.GetShowIconOnly();
worksheet.GetRange("B1").SetValue("Show icon only: " + showIconOnly);
