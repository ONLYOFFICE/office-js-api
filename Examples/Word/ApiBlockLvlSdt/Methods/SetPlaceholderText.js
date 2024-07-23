// This example sets the placeholder text to the content control.
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oBlockLvlSdt = Api.CreateBlockLvlSdt();
oDocument.AddElement(0, oBlockLvlSdt);
oBlockLvlSdt.SetPlaceholderText("Name");
builder.SaveFile("docx", "SetPlaceholderText.docx");
builder.CloseFile();