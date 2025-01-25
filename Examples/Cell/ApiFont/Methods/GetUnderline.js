// This example shows how to get the type of underline applied to the specified font.
let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("B1");
range.SetValue("This is just a sample text.");
let characters = range.GetCharacters(9, 4);
let font = characters.GetFont();
font.SetUnderline("xlUnderlineStyleSingle");
let underlineType = font.GetUnderline();
worksheet.GetRange("B3").SetValue("Underline property: " + underlineType);