// This example sets the text color to the text Range in the RGB format.
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("ONLYOFFICE Document Builder");
var oRange = oDocument.GetRange(0, 24);
oRange.SetColor(255, 111, 61);
builder.SaveFile("docx", "SetColor.docx");
builder.CloseFile();