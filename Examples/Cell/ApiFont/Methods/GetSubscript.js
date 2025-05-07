// This example shows how to get the subscript property of the specified font.

// How to determine a font subscript property.

// Get a boolean value that represents whether a font has a subscript property or not and show the value in the worksheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("B1");
range.SetValue("This is just a sample text.");
let characters = range.GetCharacters(9, 4);
let font = characters.GetFont();
font.SetSubscript(true);
let isSubscript = font.GetSubscript();
worksheet.GetRange("B3").SetValue("Subscript property: " + isSubscript);