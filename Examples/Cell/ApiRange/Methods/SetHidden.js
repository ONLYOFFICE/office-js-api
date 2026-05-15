// Hide rows so their contents are not visible in a spreadsheet.

// How do I make certain rows disappear from view in a spreadsheet?

// Keep data in place but prevent specific rows from showing in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRows("1:3");
range.SetHidden(true);
worksheet.GetRange("A1").SetValue("1");
worksheet.GetRange("B1").SetValue("2");
worksheet.GetRange("C1").SetValue("3");
let hidden = range.GetHidden();
worksheet.GetRange("A4").SetValue("The values from A1:C1 are hidden: " + hidden);