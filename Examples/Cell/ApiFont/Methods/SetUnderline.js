// Apply an underline style to selected text characters in a spreadsheet.

// How do I add underlining to part of the text in a spreadsheet?

// Decorate a run of characters with a chosen underline style in a spreadsheet.

const worksheet = Api.GetActiveSheet();
const range = worksheet.GetRange("B1");
range.SetValue("This is just a sample text.");
const characters = range.GetCharacters(9, 4);
const font = characters.GetFont();
font.SetUnderline("xlUnderlineStyleSingle");