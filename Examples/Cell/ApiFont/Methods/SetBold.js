// This example sets the bold property to the specified font.

// How to make a text bold.

// Get a font object of characters and make it bold.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("B1");
range.SetValue("This is just a sample text.");
let characters = range.GetCharacters(9, 4);
let font = characters.GetFont();
font.SetBold(true);