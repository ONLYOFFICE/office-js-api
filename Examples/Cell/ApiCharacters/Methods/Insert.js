// Insert a string replacing the specified characters in a spreadsheet.

// How to replace characters with a different string value in a spreadsheet.

// Change the characters to another string value in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("B1");
range.SetValue("This is just a sample text.");
let characters = range.GetCharacters(23, 4);
characters.Insert("string");