// Set the bold property to the specified font in a spreadsheet.

// How to make a text bold in a spreadsheet.

// Get a font object of characters and make it bold in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("B1");
range.SetValue("This is just a sample text.");
let characters = range.GetCharacters(9, 4);
let font = characters.GetFont();
font.SetBold(true);