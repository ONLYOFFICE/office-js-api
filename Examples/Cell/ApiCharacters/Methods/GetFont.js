// This example shows how to get the ApiFont object that represents the font of the specified characters.

// How to get font style of the array of characters.

// Use font of the specified characters to set their style.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("B1");
range.SetValue("This is just a sample text.");
let characters = range.GetCharacters(9, 4);
let font = characters.GetFont();
font.SetBold(true);