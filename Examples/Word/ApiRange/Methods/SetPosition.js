// This example specifies the amount by which text is raised or lowered for the Range in relation to the default baseline of the surrounding non-positioned text.
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("This is just a sample text. ");
oParagraph.AddText("This is a text run with the text raised 5 points (10 half-points).");
var oRange = oDocument.GetRange(22, 75);
oRange.SetPosition(10);