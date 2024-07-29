// This example specifies that the contents of the run are displayed with two horizontal lines through each character displayed on the line.
var oDocument = Api.GetDocument();
var oTextPr = oDocument.GetDefaultTextPr();
oTextPr.SetDoubleStrikeout(true);
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("A sample text struck out with two lines using the text properties.");