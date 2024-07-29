// This example specifies that all the small letter characters in the text run are formatted for display only as their capital letter character equivalents which are two points smaller than the actual font size specified for this text.
var oDocument = Api.GetDocument();
var oTextPr = oDocument.GetDefaultTextPr();
oTextPr.SetSmallCaps(true);
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("A sample text with the font set to small capitalized letters.");