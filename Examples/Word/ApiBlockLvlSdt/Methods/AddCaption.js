// This example adds a caption paragraph after (or before) the current content control.
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oBlockLvlSdt = Api.CreateBlockLvlSdt();
var oParagraph = Api.CreateParagraph();
var oDrawing = Api.CreateImage("https://api.onlyoffice.com/content/img/docbuilder/examples/coordinate_aspects.png", 60 * 36000, 35 * 36000);
oParagraph.AddDrawing(oDrawing);
oBlockLvlSdt.AddElement(oParagraph, 0);
oDocument.AddElement(0, oBlockLvlSdt);
oBlockLvlSdt.AddCaption("", "Figure", false, "Arabic", false, undefined, "hyphen");
builder.SaveFile("docx", "AddCaption.docx");
builder.CloseFile();