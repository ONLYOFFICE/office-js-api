// This example shows how to make a search.
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("This is paragraph №1.");
oParagraph = Api.CreateParagraph();
oParagraph.AddText("This is paragraph №2.");
oDocument.Push(oParagraph);
var aSearch = oDocument.Search("paragraph");
aSearch[1].SetBold(true);
builder.SaveFile("docx", "Search.docx");
builder.CloseFile();