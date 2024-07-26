// This example sets hiighlight color "lightGray" for the paragraph.
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("This is a paragraph with the text highlighted with light gray color.");
oParagraph.SetHighlight("lightGray");
builder.SaveFile("docx", "SetHighlight.docx");
builder.CloseFile();