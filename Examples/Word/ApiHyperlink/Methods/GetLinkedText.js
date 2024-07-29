// This example shows how to get the hyperlink address.
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oRun = Api.CreateRun();
oRun.AddText("ONLYOFFICE Document Builder");
oParagraph.AddElement(oRun);
var oHyperlink = oParagraph.AddHyperlink("https://api.onlyoffice.com/docbuilder/basic");
oHyperlink.SetLink("https://api.onlyoffice.com/");
var sLinkedText = oHyperlink.GetLinkedText();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("Linked text: " + sLinkedText);
oDocument.Push(oParagraph);