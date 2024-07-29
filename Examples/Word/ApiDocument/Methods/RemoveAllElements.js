// This example removes all the elements from the current document or from the current document element.
var oDocument = Api.GetDocument();
oDocument.RemoveAllElements();
var oParagraph = Api.CreateParagraph();
oParagraph.AddText("This is the first paragraph. ");
oParagraph.AddText("We removed all document elements (including the first paragraph, created by default). ");
oParagraph.AddText("This paragraph now took its place.");
oDocument.AddElement(0, oParagraph);