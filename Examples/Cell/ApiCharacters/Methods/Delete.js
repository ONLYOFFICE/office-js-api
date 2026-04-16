// Delete the characters object in a spreadsheet.

// How to delete characters from an array in a spreadsheet.

// Delete and display the result in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("B1");
range.SetValue("This is just a sample text.");
let characters = range.GetCharacters(9, 4);
characters.Delete();