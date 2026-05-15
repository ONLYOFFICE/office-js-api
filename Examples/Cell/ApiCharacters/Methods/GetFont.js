// Access the font settings for a specific range of characters inside a cell in a spreadsheet.

// How do I read or change the font properties of part of a cell's text in a spreadsheet?

// Target individual characters within a cell to apply bold, size, or other formatting in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("B1");
range.SetValue("This is just a sample text.");
let characters = range.GetCharacters(9, 4);
let font = characters.GetFont();
font.SetBold(true);