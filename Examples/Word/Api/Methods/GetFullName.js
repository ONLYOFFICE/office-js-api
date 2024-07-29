// This example gets a document name and inserts it into the document.
var oDocument = Api.GetDocument();
var sName = Api.GetFullName();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("File name: " + sName);