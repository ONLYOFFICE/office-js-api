// This example shows how to get the document statistics represented as an object.
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("This is just a sample paragraph.");
var oStatistics = oDocument.GetStatistics();
oParagraph.AddLineBreak();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("Document statistics");
oParagraph.SetBold(true);
oDocument.Push(oParagraph);
oParagraph = Api.CreateParagraph();
oParagraph.AddText("Pages: " + oStatistics.PageCount);
oDocument.Push(oParagraph);
oParagraph = Api.CreateParagraph();
oParagraph.AddText("Words: " + oStatistics.WordsCount);
oDocument.Push(oParagraph);
oParagraph = Api.CreateParagraph();
oParagraph.AddText("Paragraphs: " + oStatistics.ParagraphCount);
oDocument.Push(oParagraph);
oParagraph = Api.CreateParagraph();
oParagraph.AddText("Symbols: " + oStatistics.SymbolsCount);
oDocument.Push(oParagraph);
oParagraph = Api.CreateParagraph();
oParagraph.AddText("Symbols with spaces: " + oStatistics.SymbolsWSCount);
oDocument.Push(oParagraph);