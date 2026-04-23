// Change the text color in a cell range in a spreadsheet.

// How do I make the text in a group of cells a different color in a spreadsheet?

// Give cell text a specific color to highlight or differentiate it in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A2").SetFontColor(Api.CreateColorFromRGB(255, 111, 61));
worksheet.GetRange("A2").SetValue("This is the text with a color set to it");
worksheet.GetRange("A4").SetValue("This is the text with a default color");