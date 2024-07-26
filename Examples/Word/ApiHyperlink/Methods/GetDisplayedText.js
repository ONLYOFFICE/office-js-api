// This example shows how to get the hyperlink display text.
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("ONLYOFFICE Document Builder");
var oHyperlink = oParagraph.AddHyperlink("https://api.onlyoffice.com/docbuilder/basic");
var sDisplayedText = oHyperlink.GetDisplayedText();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("Displayed text: " + sDisplayedText);
oDocument.Push(oParagraph);
builder.SaveFile("docx", "GetDisplayedText.docx");
builder.CloseFile();