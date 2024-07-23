// This example sets the text properties to the Range.
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("ONLYOFFICE Document Builder");
var oTextPr = oParagraph.GetTextPr();
oTextPr.SetItalic(true);
var oRange = oDocument.GetRange(0, 24);
oRange.SetTextPr(oTextPr);
builder.SaveFile("docx", "SetTextPr.docx");
builder.CloseFile();