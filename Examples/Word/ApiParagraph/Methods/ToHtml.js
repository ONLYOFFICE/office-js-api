// This example shows how to convert a paragraph to HTML.

// Create a paragraph with text, convert it to HTML, and display the result in the document.

// How to convert the ApiParagraph object to HTML.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This paragraph will be converted to HTML.");
let html = paragraph.ToHtml();
let paragraph2 = Api.CreateParagraph();
paragraph2.AddText("HTML output: " + html);
doc.Push(paragraph2);
