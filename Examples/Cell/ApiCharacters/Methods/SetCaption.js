// Set a string value that represents the text of the specified range of characters in a spreadsheet.

// How to add a label for the specified characters in a spreadsheet.

// Set a caption for the characters collection in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("B1");
range.SetValue("This is just a sample text.");
let characters = range.GetCharacters(23, 4);
characters.SetCaption("string");