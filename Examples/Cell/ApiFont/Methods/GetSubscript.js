// Read whether a specific range of characters is formatted as subscript in a spreadsheet.

// How do I check if certain characters in a cell are displayed in a lowered subscript position in a spreadsheet?

// Inspect the subscript setting of a character range and display the result in a cell in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("B1");
range.SetValue("This is just a sample text.");
let characters = range.GetCharacters(9, 4);
let font = characters.GetFont();
font.SetSubscript(true);
let isSubscript = font.GetSubscript();
worksheet.GetRange("B3").SetValue("Subscript property: " + isSubscript);