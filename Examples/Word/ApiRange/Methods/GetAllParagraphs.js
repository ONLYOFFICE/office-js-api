// Get a collection of paragraphs that represents all the paragraphs in the specified range in a document.

// How to get all paragraphs in a document.

// Retrieve all paragraphs from the document and make the first one bold.

let doc = Api.GetDocument();
let firstParagraph = doc.GetElement(0);
firstParagraph.AddText("First paragraph");
let secondParagraph = Api.CreateParagraph();
secondParagraph.AddText("Second Paragraph");
doc.Push(secondParagraph);
let range = doc.GetRange(0, 28);
let paragraphs = range.GetAllParagraphs();
paragraphs[0].SetBold("true");