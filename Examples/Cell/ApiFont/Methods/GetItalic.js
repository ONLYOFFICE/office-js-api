// This example shows how to get the italic property of the specified font.
let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("B1");
range.SetValue("This is just a sample text.");
let characters = range.GetCharacters(9, 4);
let font = characters.GetFont();
font.SetItalic(true);
let isItalic = font.GetItalic();
worksheet.GetRange("B3").SetValue("Italic property: " + isItalic);