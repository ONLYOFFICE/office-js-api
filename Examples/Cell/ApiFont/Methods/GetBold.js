// This example shows how to get the bold property of the specified font.
let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("B1");
range.SetValue("This is just a sample text.");
let characters = range.GetCharacters(9, 4);
let font = characters.GetFont();
font.SetBold(true);
let isBold = font.GetBold();
worksheet.GetRange("B3").SetValue("Bold property: " + isBold);