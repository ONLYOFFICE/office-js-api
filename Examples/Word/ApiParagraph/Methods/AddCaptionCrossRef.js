// This example adds a caption cross-reference to the paragraph.
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oDrawing = Api.CreateImage("https://api.onlyoffice.com/content/img/docbuilder/examples/coordinate_aspects.png", 60 * 36000, 35 * 36000);
oParagraph.AddDrawing(oDrawing);
oParagraph = Api.CreateParagraph();
oDocument.Push(oParagraph);
oParagraph.AddCaption("", "Figure", false, "Arabic", false, undefined, "hyphen");
oParagraph = Api.CreateParagraph();
oDocument.Push(oParagraph);
oParagraph.AddText('Link to ');
var aCaptionParagraphs = oDocument.GetAllCaptionParagraphs("Figure");
oParagraph.AddCaptionCrossRef("Figure", "entireCaption", aCaptionParagraphs[0], true, false);