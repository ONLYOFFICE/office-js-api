// Add an underline beneath the text in a cell in a spreadsheet.

// How do I underline the contents of a cell in a spreadsheet?

// Highlight or emphasize cell text by placing a line under it in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A2").SetValue("The text underlined with a single line");
worksheet.GetRange("A2").SetUnderline("single");
worksheet.GetRange("A4").SetValue("Normal text");