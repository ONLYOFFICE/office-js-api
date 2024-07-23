// This example shows how to get a Range object that represents the document part contained in the specified hyperlink.
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("Api Document Builder");
var oHyperlink = oParagraph.AddHyperlink("https://api.onlyoffice.com/docbuilder/basic");
var oRange = oHyperlink.GetRange(0, 2);
oRange.SetBold(true);
builder.SaveFile("docx", "GetRange .docx");
builder.CloseFile();