// This example inserts a string replacing the specified characters.

// How to replace characters with a different string value.

// Change the characters to another string value.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("B1");
range.SetValue("This is just a sample text.");
let characters = range.GetCharacters(23, 4);
characters.Insert("string");