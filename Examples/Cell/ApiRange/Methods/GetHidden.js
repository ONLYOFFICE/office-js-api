// Check whether rows in a selected range are hidden in a spreadsheet.

// How do I find out if a range of rows is currently hidden in a spreadsheet?

// Reveal the visibility state of a row group without scrolling through the sheet in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRows("1:3");
range.SetHidden(true);
worksheet.GetRange("A1").SetValue("1");
worksheet.GetRange("B1").SetValue("2");
worksheet.GetRange("C1").SetValue("3");
let hidden = range.GetHidden();
worksheet.GetRange("A4").SetValue("The values from A1:C1 are hidden: " + hidden);