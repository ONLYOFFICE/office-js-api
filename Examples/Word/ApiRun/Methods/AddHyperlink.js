// This example adds a hyperlink to the run.
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oRun = Api.CreateRun();
oRun.AddText("ONLYOFFICE Document Builder");
oParagraph.AddElement(oRun);
oRun.AddHyperlink("https://www.onlyoffice.com", "main page");