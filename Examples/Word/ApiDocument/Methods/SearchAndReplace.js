// This example shows how to make search and replace.
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("This is the first sample text. The serial number of this sample text was replaced here.");
oDocument.SearchAndReplace({"searchString": "first", "replaceString": "second"});