// This example shows how to get all caption paragraphs of the specified type from the current document.
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oDrawing = Api.CreateImage("https://api.onlyoffice.com/content/img/docbuilder/examples/coordinate_aspects.png", 60 * 36000, 35 * 36000);
oParagraph.AddDrawing(oDrawing);
oParagraph = Api.CreateParagraph();
oDocument.Push(oParagraph);
oParagraph.AddCaption("", "Figure", false, "Arabic", false, undefined, "hyphen");
var aCaptionParagraphs = oDocument.GetAllCaptionParagraphs("Figure");
aCaptionParagraphs[0].SetCaps(true);
builder.SaveFile("docx", "GetAllCaptionParagraphs.docx");
builder.CloseFile();