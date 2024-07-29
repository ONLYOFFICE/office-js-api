// This example converts the ApiHyperlink object into the JSON object.
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oHyperlink = Api.CreateHyperlink("https://api.onlyoffice.com/", "ONLYOFFICE Document Builder", "ONLYOFFICE for developers");
var json = oHyperlink.ToJSON(true);
var oHyperlinkFromJSON = Api.FromJSON(json);
oHyperlinkFromJSON.SetDefaultStyle();
oParagraph.AddElement(oHyperlinkFromJSON);