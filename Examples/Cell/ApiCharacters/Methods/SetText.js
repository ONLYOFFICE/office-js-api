// Set the text for the specified characters in a spreadsheet.

// Update characters collection by setting a new text in a spreadsheet.

// Set text for the characters of the range in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("B1");
range.SetValue("This is just a sample text.");
let characters = range.GetCharacters(23, 4);
characters.SetText