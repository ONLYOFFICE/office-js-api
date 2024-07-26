// This example specifies the shading applied to the contents of the current text Range.
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("ONLYOFFICE Document Builder");
var oRange = oDocument.GetRange(0, 24);
oRange.SetShd("clear", 255, 111, 61);
builder.SaveFile("docx", "SetShd.docx");
builder.CloseFile();