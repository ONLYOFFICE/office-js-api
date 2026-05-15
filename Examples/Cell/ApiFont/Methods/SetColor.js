// Change the color of specific text characters in a cell in a spreadsheet.

// How do I apply a custom color to part of the text inside a cell in a spreadsheet?

// Paint a selected run of characters with an RGB color value in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("B1");
range.SetValue("This is just a sample text.");
let characters = range.GetCharacters(9, 4);
let font = characters.GetFont();
let color = Api.CreateColorFromRGB(255, 111, 61);
font.SetColor(color);