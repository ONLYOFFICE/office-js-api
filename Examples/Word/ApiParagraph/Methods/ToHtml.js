// Export a paragraph's content as an HTML string for use outside the editor in a document.

// How do I get the HTML representation of a paragraph's text and formatting in a document?

// Capture paragraph content as markup so it can be embedded or transferred to a web page from a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This paragraph will be converted to HTML.");
let html = paragraph.ToHtml();
let paragraph2 = Api.CreateParagraph();
paragraph2.AddText("HTML output: " + html);
doc.Push(paragraph2);