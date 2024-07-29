// This example inserts an array of elements into the current position of the document.
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph = Api.CreateParagraph();
oParagraph.AddText("This is a sample text. It was inserted here.");
oDocument.InsertContent([oParagraph]);