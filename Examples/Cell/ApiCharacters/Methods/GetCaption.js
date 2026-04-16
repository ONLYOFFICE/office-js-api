// Get a string value that represents the text of the specified range of characters in a spreadsheet.

// Get a value that represents the label text for the pivot field in a spreadsheet.

// How to get and display caption of the text in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("B1");
range.SetValue("This is just a sample text.");
let characters = range.GetCharacters(23, 4);
let caption = characters.GetCaption();
worksheet.GetRange("B3").SetValue("Caption: " + caption);