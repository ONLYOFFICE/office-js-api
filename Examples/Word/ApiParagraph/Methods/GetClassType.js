// This example gets a class type and inserts it into the document.
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var sClassType = oParagraph.GetClassType();
oParagraph.AddText("Class Type = " + sClassType);