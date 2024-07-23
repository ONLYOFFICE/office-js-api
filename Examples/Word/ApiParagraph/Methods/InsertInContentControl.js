// This example wraps the paragraph object with a rich text content control.
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = Api.CreateParagraph();
oParagraph.AddText("This is a paragraph inserted into the content control.");
var oBlockLvlSdt = oParagraph.InsertInContentControl(1);
oDocument.AddElement(0, oBlockLvlSdt);
builder.SaveFile("docx", "InsertInContentControl.docx");
builder.CloseFile();