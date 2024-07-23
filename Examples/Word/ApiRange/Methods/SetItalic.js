// This example sets the italic property to the text character.
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("ONLYOFFICE Document Builder");
var oRange = oDocument.GetRange(0, 24);
oRange.SetItalic(true);
builder.SaveFile("docx", "SetItalic.docx");
builder.CloseFile();