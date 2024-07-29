// This example specifies that the contents of the current run are displayed with a single horizontal line through the center of the line.
var oDocument = Api.GetDocument();
var oTextPr = oDocument.GetDefaultTextPr();
oTextPr.SetStrikeout(true);
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("A sample text struck out with a single line.");