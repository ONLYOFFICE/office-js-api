// Draw a horizontal line through the middle of cell text in a spreadsheet.

// How do I cross out the text in a cell in a spreadsheet?

// Mark content as deleted or outdated by striking through it in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A2").SetValue("Struckout text");
worksheet.GetRange("A2").SetStrikeout(true);
worksheet.GetRange("A3").SetValue("Normal text");