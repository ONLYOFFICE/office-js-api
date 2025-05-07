// This example sets the strikethrough property to the specified font.

// How to make a text strikethrough.

// Get a font object of characters and make it strikethrough.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("B1");
range.SetValue("This is just a sample text.");
let characters = range.GetCharacters(9, 4);
let font = characters.GetFont();
font.SetStrikethrough(true);