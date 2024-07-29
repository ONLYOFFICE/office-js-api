// This example shows how to get a collection of paragraphs that represents all the paragraphs in the specified range.
var oDocument = editor.GetDocument();
var oFParagraph = oDocument.GetElement(0);
oFParagraph.AddText("First paragraph");
var oSParagraph = editor.CreateParagraph();
oSParagraph.AddText("Second Paragraph");
oDocument.Push(oSParagraph);
var oRange = oDocument.GetRange(0, 28);
var arrParagraphs = oRange.GetAllParagraphs();
arrParagraphs[0].SetBold("true");