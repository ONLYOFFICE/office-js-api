// This example clears the contents from the content control.
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oBlockLvlSdt = Api.CreateBlockLvlSdt();
oBlockLvlSdt.GetContent().GetElement(0).AddText("This is a block text content control.");
oDocument.AddElement(0, oBlockLvlSdt);
oBlockLvlSdt.RemoveAllElements();
var oParagraph = oDocument.GetElement(1);
oParagraph.AddText("All elements were removed from the content control.");
builder.SaveFile("docx", "RemoveAllElements.docx");
builder.CloseFile();