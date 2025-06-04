// This example shows how to get the document statistics represented as an object.

// How to get the document statistics showing pages count, words count, etc.

// Display words, pages, symbols, paragraphs count of the document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is just a sample paragraph.");
let statistics = doc.GetStatistics();
paragraph.AddLineBreak();
paragraph = Api.CreateParagraph();
paragraph.AddText("Document statistics");
paragraph.SetBold(true);
doc.Push(paragraph);
paragraph = Api.CreateParagraph();
paragraph.AddText("Pages: " + statistics.PageCount);
doc.Push(paragraph);
paragraph = Api.CreateParagraph();
paragraph.AddText("Words: " + statistics.WordsCount);
doc.Push(paragraph);
paragraph = Api.CreateParagraph();
paragraph.AddText("Paragraphs: " + statistics.ParagraphCount);
doc.Push(paragraph);
paragraph = Api.CreateParagraph();
paragraph.AddText("Symbols: " + statistics.SymbolsCount);
doc.Push(paragraph);
paragraph = Api.CreateParagraph();
paragraph.AddText("Symbols with spaces: " + statistics.SymbolsWSCount);
doc.Push(paragraph);