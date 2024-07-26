// This example selects the content control.
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oBlockLvlSdt = Api.CreateBlockLvlSdt();
oBlockLvlSdt.GetContent().GetElement(0).AddText("The block text content control is selected.");
oDocument.AddElement(0, oBlockLvlSdt);
oBlockLvlSdt.Select();
builder.SaveFile("docx", "Select.docx");
builder.CloseFile();