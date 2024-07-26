// This example sets the font size to the characters of the text Range.
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("ONLYOFFICE Document Builder");
var oRange = oDocument.GetRange(0, 24);
oRange.SetFontSize(14);
builder.SaveFile("docx", "SetFontSize.docx");
builder.CloseFile();