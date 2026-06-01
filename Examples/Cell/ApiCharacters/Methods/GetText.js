// Read the plain text content of a selected group of characters in a spreadsheet.

// How do I extract just the text from a specific portion of a cell's value in a spreadsheet?

// Capture a substring of cell text for comparison or display elsewhere in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("B1");
range.SetValue("This is just a sample text.");
let characters = range.GetCharacters(23, 4);
let text = characters.GetText();
worksheet.GetRange("B3").SetValue("Text: " + text);