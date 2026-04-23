// Collect all paragraphs contained within a selected range in a document.

// How do I get every paragraph that falls inside a text selection in a document?

// Pull together each paragraph from a bounded region to process them as a group in a document.

let doc = Api.GetDocument();
let firstParagraph = doc.GetElement(0);
firstParagraph.AddText("First paragraph");
let secondParagraph = Api.CreateParagraph();
secondParagraph.AddText("Second Paragraph");
doc.Push(secondParagraph);
let range = doc.GetRange(0, 28);
let paragraphs = range.GetAllParagraphs();
paragraphs[0].SetBold("true");