// This example shows how to get a string value that represents the text of the specified range of characters.

// Get a value that represents the label text for the pivot field.

// How to get and display caption of the text.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("B1");
range.SetValue("This is just a sample text.");
let characters = range.GetCharacters(23, 4);
let caption = characters.GetCaption();
worksheet.GetRange("B3").SetValue("Caption: " + caption);