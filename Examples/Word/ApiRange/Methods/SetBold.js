// This example sets the bold property to the text character.
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("ONLYOFFICE Document Builder");
var oRange = oDocument.GetRange(0, 24);
oRange.SetBold(true);
builder.SaveFile("docx", "SetBold.docx");
builder.CloseFile();