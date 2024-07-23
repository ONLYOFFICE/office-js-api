// This example shows how to get the screen tip text of the hyperlink.
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oRun = Api.CreateRun();
oRun.AddText("ONLYOFFICE Document Builder");
oParagraph.AddElement(oRun);
var oHyperlink = oParagraph.AddHyperlink("https://api.onlyoffice.com/docbuilder/basic");
oHyperlink.SetScreenTipText("ONLYOFFICE for developers");
var sScreenTipText = oHyperlink.GetScreenTipText();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("Screen tip text: " + sScreenTipText);
oDocument.Push(oParagraph);
builder.SaveFile("docx", "GetScreenTipText.docx");
builder.CloseFile();