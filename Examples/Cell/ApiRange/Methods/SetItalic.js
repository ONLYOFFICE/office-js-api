// Display cell text in italic style in a spreadsheet.

// How do I make the text inside a cell appear slanted in a spreadsheet?

// Emphasize content by switching the font to italic in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A2").SetValue("Italicized text");
worksheet.GetRange("A2").SetItalic(true);
worksheet.GetRange("A3").SetValue("Normal text");