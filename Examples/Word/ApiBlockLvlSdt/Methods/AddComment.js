// This example adds comment to the block content control
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oBlockLvlSdt = Api.CreateBlockLvlSdt();
oBlockLvlSdt.GetContent().GetElement(0).AddText("This is a block text content control.");
oDocument.AddElement(0, oBlockLvlSdt);
oBlockLvlSdt.AddComment("comment", "John Smith");
builder.SaveFile("docx", "AddComment.docx");
builder.CloseFile();