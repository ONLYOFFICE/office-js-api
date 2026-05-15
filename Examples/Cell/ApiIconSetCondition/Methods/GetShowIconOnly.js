// Find out whether an icon set rule hides cell values and shows only icons in a spreadsheet.

// How do I check if a formatting rule is set to display icons without the underlying cell values in a spreadsheet?

// Confirm that the icon-only display mode is active for an icon set formatting rule in a spreadsheet.

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