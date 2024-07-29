// This example sets the bold property to the text character.
var oDocument = Api.GetDocument();
var oTextPr = oDocument.GetDefaultTextPr();
oTextPr.SetBold(true);
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("A sample text with the font weight set to bold using the text properties.");