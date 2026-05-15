// Retrieve document statistics as a structured object in a document.

// How do I read page count, word count, and paragraph count in a document?

// Check how many pages, words, symbols, and paragraphs a finished document contains.

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