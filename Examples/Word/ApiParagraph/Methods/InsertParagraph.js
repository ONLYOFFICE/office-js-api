// This example inserts a paragraph at the specified position.
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph1 = oDocument.GetElement(0);
oParagraph1.AddText("This is just a sample text.");
var oParagraph2 = Api.CreateParagraph();
oParagraph2.AddText("This paragraph was inserted here.");
oParagraph1.InsertParagraph(oParagraph2, "after", true);
builder.SaveFile("docx", "InsertParagraph.docx");
builder.CloseFile();