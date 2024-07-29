// This example adds a caption paragraph after the paragraph.
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oDrawing = Api.CreateImage("https://api.onlyoffice.com/content/img/docbuilder/examples/coordinate_aspects.png", 60 * 36000, 35 * 36000);
oParagraph.AddDrawing(oDrawing);
oParagraph = Api.CreateParagraph();
oDocument.Push(oParagraph);
oParagraph.AddCaption("", "Figure", false, "Arabic", false, undefined, "hyphen");