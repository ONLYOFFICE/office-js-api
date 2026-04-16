// Get the characters object that represents a range of characters within the object text in a spreadsheet.

// How to get range characters in a spreadsheet.

// Get the range characters, get their font object and set it to bold in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("B1");
range.SetValue("This is just a sample text.");
let characters = range.GetCharacters(9, 4);
let font = characters.GetFont();
font.SetBold(true);