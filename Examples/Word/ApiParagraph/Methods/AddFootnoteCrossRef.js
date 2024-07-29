// This example adds a footnote cross-reference to the paragraph.
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0); 
oParagraph.AddText("This is just a sample text.");
oDocument.AddFootnote();
var aFootnotesFirstParagraphs = oDocument.GetFootnotesFirstParagraphs();
aFootnotesFirstParagraphs[0].AddText("Footnote 1");
oParagraph = Api.CreateParagraph();
oParagraph.AddText("For more information on previous sentences see footnote ");
oDocument.Push(oParagraph);
oParagraph.AddFootnoteCrossRef("formFootnoteNum", aFootnotesFirstParagraphs[0]);