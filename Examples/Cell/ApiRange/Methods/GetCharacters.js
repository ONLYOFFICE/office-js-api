// This example shows how to get the ApiCharacters object that represents a range of characters within the object text.

// How to get range characters.

// Get the range characters, get their font object and set it to bold.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("B1");
range.SetValue("This is just a sample text.");
let characters = range.GetCharacters(9, 4);
let font = characters.GetFont();
font.SetBold(true);
