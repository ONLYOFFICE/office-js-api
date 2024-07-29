// This example shows how to get the type of underline applied to the specified font.
var oWorksheet = Api.GetActiveSheet();
var oRange = oWorksheet.GetRange("B1");
oRange.SetValue("This is just a sample text.");
var oCharacters = oRange.GetCharacters(9, 4);
var oFont = oCharacters.GetFont();
oFont.SetUnderline("xlUnderlineStyleSingle");
var sUnderline = oFont.GetUnderline();
oWorksheet.GetRange("B3").SetValue("Underline property: " + sUnderline);