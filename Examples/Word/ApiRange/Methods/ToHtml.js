// Export a selected portion of text as an HTML string in a document.

// How do I turn a range of words into HTML markup so it can be used outside the document?

// Capture the content of a text range in HTML format for embedding or further processing in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This range will be converted to HTML.");
let range = paragraph.GetRange(0, 36);
let html = range.ToHtml();
let paragraph2 = Api.CreateParagraph();
paragraph2.AddText("HTML output: " + html);
doc.Push(paragraph2);