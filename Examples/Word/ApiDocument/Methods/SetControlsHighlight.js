// This example sets the highlight to the content controls from the document.
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oBlockLvlSdt = Api.CreateBlockLvlSdt();
oBlockLvlSdt.GetContent().GetElement(0).AddText("This is a block text content control.");
oDocument.AddElement(0, oBlockLvlSdt);
oDocument.SetControlsHighlight(255, 111, 61);
builder.SaveFile("docx", "SetControlsHighlight.docx");
builder.CloseFile();