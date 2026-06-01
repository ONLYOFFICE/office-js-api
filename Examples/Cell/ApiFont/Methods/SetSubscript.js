// Lower selected text characters below the baseline as subscript in a spreadsheet.

// How do I format part of the text as subscript in a spreadsheet?

// Shift a run of characters downward to create subscript notation in a spreadsheet.

const worksheet = Api.GetActiveSheet();
const range = worksheet.GetRange("B1");
range.SetValue("This is just a sample text.");
const characters = range.GetCharacters(9, 4);
const font = characters.GetFont();
font.SetSubscript(true);