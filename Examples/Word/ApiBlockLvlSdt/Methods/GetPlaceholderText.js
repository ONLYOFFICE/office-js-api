// This example shows how to get the placeholder text from the content control.
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oBlockLvlSdt = Api.CreateBlockLvlSdt();
oDocument.AddElement(0, oBlockLvlSdt);
oBlockLvlSdt.SetPlaceholderText("Name");
var sText = oBlockLvlSdt.GetPlaceholderText();
var oParagraph = Api.CreateParagraph();
oParagraph.AddText("Placeholder text: " + sText);
oDocument.Push(oParagraph);
builder.SaveFile("docx", "GetPlaceholderText.docx");
builder.CloseFile();