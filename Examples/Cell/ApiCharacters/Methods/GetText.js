// This example shows how to get the text of the specified range of characters.

// How to get a raw text from the characters.

// Retrieve a text from the character collection.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("B1");
range.SetValue("This is just a sample text.");
let characters = range.GetCharacters(23, 4);
let text = characters.GetText();
worksheet.GetRange("B3").SetValue("Text: " + text);