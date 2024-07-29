// This example sets the text color for the current text run in the RGB format.
var oDocument = Api.GetDocument();
var oTextPr = oDocument.GetDefaultTextPr();
oTextPr.SetColor(255, 111, 61, false);
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("A sample text with the color set to orange using the text properties.");