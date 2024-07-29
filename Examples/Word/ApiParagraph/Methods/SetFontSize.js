// This example sets the font size to the characters of the paragraph.
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("This is just a sample paragraph with the font size set to 24 points.");
oParagraph.SetFontSize(48);