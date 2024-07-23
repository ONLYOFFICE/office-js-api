// This example shows how to get a collection of tables on a given absolute page.
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oDrawing = Api.CreateImage("https://api.onlyoffice.com/content/img/docbuilder/examples/coordinate_aspects.png", 60 * 36000, 35 * 36000);
var oParagraph = Api.CreateParagraph();
oParagraph.AddPageBreak();
oDocument.Push(oParagraph);
oDocument.AddDrawingToPage(oDrawing, 1, 50 * 36000, 50 * 36000);
builder.SaveFile("docx", "AddDrawingToPage.docx");
builder.CloseFile();