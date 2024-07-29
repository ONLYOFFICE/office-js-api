// This example shows how to get an element by its position in the document content.
var oDocument = Api.GetDocument();
var oSection = oDocument.GetFinalSection();
var oDocContent = oSection.GetHeader("default", true);
var oParagraph = oDocContent.GetElement(0);
oParagraph.AddText("This is the text in the default header");