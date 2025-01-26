// This example shows how to get the superscript property of the specified font.
let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("B1");
range.SetValue("This is just a sample text.");
let characters = range.GetCharacters(9, 4);
let font = characters.GetFont();
font.SetSuperscript(true);
let isSuperscript = font.GetSuperscript();
worksheet.GetRange("B3").SetValue("Superscript property: " + isSuperscript);