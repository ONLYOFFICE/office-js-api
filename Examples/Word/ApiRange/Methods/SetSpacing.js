// This example sets the text spacing measured in twentieths of a point.
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("ONLYOFFICE Document Builder");
var oRange = oDocument.GetRange(0, 24);
oRange.SetSpacing(2);
builder.SaveFile("docx", "SetSpacing.docx");
builder.CloseFile();