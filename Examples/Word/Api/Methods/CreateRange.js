// This example ctreates a range and sets bold for the first 9 characters.
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("ONLYOFFICE Document Builder");
var oRange = Api.CreateRange(oParagraph, 0, 9);
oRange.SetBold(true);
builder.SaveFile("docx", "CreateRange.docx");
builder.CloseFile();