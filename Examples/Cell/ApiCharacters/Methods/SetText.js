// This example sets the text for the specified characters.

// Update characters collection by setting a new text.

// Set text for the characters of the range.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("B1");
range.SetValue("This is just a sample text.");
let characters = range.GetCharacters(23, 4);
characters.SetText