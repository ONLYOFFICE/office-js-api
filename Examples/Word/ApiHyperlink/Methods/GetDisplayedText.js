// This example shows how to get the hyperlink display text.
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("ONLYOFFICE Document Builder");
var oHyperlink = oParagraph.AddHyperlink("https://api.onlyoffice.com/docbuilder/basic");
var sDisplayedText = oHyperlink.GetDisplayedText();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("Displayed text: " + sDisplayedText);
oDocument.Push(oParagraph);