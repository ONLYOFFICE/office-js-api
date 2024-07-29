// This example shows how to get an array of all paragraphs from the document.
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("Paragraph 1");
oParagraph = Api.CreateParagraph();
oParagraph.AddText("Paragraph 2");
oDocument.AddElement(1, oParagraph);
var aParagraphs = oDocument.GetAllParagraphs();
aParagraphs[0].SetBold(true);