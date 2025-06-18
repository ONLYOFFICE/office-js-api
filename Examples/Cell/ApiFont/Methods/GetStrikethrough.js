// This example shows how to get the strikethrough property of the specified font.

// How to determine a font strikethrough property.

// Get a boolean value that represents whether a font is strikethrough or not and show the value in the worksheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("B1");
range.SetValue("This is just a sample text.");
let characters = range.GetCharacters(9, 4);
let font = characters.GetFont();
font.SetStrikethrough(true);
let isStrikethrough = font.GetStrikethrough();
worksheet.GetRange("B3").SetValue("Strikethrough property: " + isStrikethrough);