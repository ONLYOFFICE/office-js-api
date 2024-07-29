// This example adds a text to the specified position.
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("Document");
var oRange = oDocument.GetRange(0, 7);
oRange.AddText("ONLYOFFICE ", "before");
oRange.AddText(" Builder", "after");