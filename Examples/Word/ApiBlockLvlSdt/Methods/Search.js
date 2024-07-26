// This example shows how to make a search in content control object.
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oBlockLvlSdt = Api.CreateBlockLvlSdt();
var oParagraph1 = Api.CreateParagraph();
oParagraph1.AddText("This is the first paragraph in the content control.");
oBlockLvlSdt.AddElement(oParagraph1, 0);
var oParagraph2 = Api.CreateParagraph();
oParagraph2.AddText("This is the second paragraph in the content control.");
oBlockLvlSdt.AddElement(oParagraph2, 1);
oDocument.AddElement(0, oBlockLvlSdt);
oBlockLvlSdt.Search("paragraph")[1].SetBold(true);
builder.SaveFile("docx", "Search.docx");
builder.CloseFile();