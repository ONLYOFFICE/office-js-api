// This example sets the text color to the current paragraph in the RGB format.
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("This is a paragraph with the font color set to orange.");
oParagraph.SetColor(255, 111, 61);