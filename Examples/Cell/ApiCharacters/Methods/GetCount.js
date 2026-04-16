// Get a value that represents a number of objects in the collection in a spreadsheet.

// How to get collection objects count in a spreadsheet.

// How to get array length using the characters API in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("B1");
range.SetValue("This is just a sample text.");
let characters = range.GetCharacters(23, 4);
let count = characters.GetCount();
worksheet.GetRange("B3").SetValue("Number of characters: " + count);