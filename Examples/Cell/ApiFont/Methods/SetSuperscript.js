// Raise selected text characters above the baseline as superscript in a spreadsheet.

// How do I format part of the text as superscript in a spreadsheet?

// Lift a run of characters upward to create superscript notation in a spreadsheet.

const worksheet = Api.GetActiveSheet();
const range = worksheet.GetRange("B1");
range.SetValue("This is just a sample text.");
const characters = range.GetCharacters(9, 4);
const font = characters.GetFont();
font.SetSuperscript(true);