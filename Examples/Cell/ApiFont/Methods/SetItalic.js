// Apply italic formatting to selected text characters in a spreadsheet.

// How do I make specific characters appear in italics in a spreadsheet?

// Slant a portion of cell text by enabling the italic style in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("B1");
range.SetValue("This is just a sample text.");
let characters = range.GetCharacters(9, 4);
let font = characters.GetFont();
font.SetItalic(true);