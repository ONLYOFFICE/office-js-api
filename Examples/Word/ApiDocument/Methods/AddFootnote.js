// This example adds footnote fot the document.
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0); 
oParagraph.AddText("This is just a sample text.");
oDocument.AddFootnote();
var aFootnotesFirstParagraphs = oDocument.GetFootnotesFirstParagraphs();
aFootnotesFirstParagraphs[0].AddText("Footnote 1");
aFootnotesFirstParagraphs[0].SetBold(true);