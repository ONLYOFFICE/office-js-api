// This example adds a comment to the range.
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("Document");
var oRange = oDocument.GetRange(0, 7);
oRange.AddText("ONLYOFFICE ", "before");
oRange.AddText(" Builder", "after");
oRange.AddComment("comment", "John Smith");