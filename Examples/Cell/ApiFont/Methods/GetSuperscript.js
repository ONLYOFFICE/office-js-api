// Check whether a text character is displayed as superscript in a spreadsheet.

// How do I find out if a character is raised above the text baseline in a spreadsheet?

// Read the superscript setting from a character's font and display the result in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("B1");
range.SetValue("This is just a sample text.");
let characters = range.GetCharacters(9, 4);
let font = characters.GetFont();
font.SetSuperscript(true);
let isSuperscript = font.GetSuperscript();
worksheet.GetRange("B3").SetValue("Superscript property: " + isSuperscript);