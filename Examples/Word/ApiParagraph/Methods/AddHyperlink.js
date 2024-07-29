// This example adds a hyperlink to a paragraph.
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oRun = Api.CreateRun();
oRun.AddText("ONLYOFFICE Document Builder");
oParagraph.AddElement(oRun);
oParagraph.AddHyperlink("https://api.onlyoffice.com/docbuilder/basic", "docbuilder");