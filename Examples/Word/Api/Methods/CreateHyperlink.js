// This example creates hyperlink and pastes it into the document.
var oDocument = Api.GetDocument();
var oHyperlink = Api.CreateHyperlink("https://api.onlyoffice.com/", "ONLYOFFICE Document Builder", "ONLYOFFICE for developers");
var sType = oHyperlink.GetClassType();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddElement(oHyperlink, 0);
oParagraph.AddLineBreak();
oParagraph.AddText("Class type of the created object: " + sType);