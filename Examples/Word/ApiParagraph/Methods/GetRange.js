// Select a range of characters within a paragraph in a document.

// How do I get a specific character range from a paragraph in a document?

// Bold a chosen slice of text by extracting it as a range from a paragraph in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is just a sample paragraph.");
let range = paragraph.GetRange(8, 11);
range.SetBold(true);