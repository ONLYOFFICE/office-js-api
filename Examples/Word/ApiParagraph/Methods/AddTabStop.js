// This example adds a tab stop to the paragraph.
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("This is just a sample text. After it three tab stops will be added.");
oParagraph.AddTabStop();
oParagraph.AddTabStop();
oParagraph.AddTabStop();
oParagraph.AddText("This is the text which starts after the tab stops.");
builder.SaveFile("docx", "AddTabStop.docx");
builder.CloseFile();