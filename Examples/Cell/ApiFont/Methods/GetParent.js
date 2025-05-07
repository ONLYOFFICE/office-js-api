// This example shows how to get the parent ApiCharacters object of the specified font.

// How to determine a font object's parent.

// Get a parent of a font and add text to it.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("B1");
range.SetValue("This is just a sample text.");
let characters = range.GetCharacters(23, 4);
let font = characters.GetFont();
let parent = font.GetParent();
parent.SetText("string");