// This example deletes the ApiCharacters object.

// How to delete characters from an array.

// Remove all characters.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("B1");
range.SetValue("This is just a sample text.");
let characters = range.GetCharacters(9, 4);
characters.Delete();