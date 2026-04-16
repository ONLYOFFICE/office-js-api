// This example shows how to convert a range to HTML.

// Get a range from the first paragraph and convert it to HTML, then display the result.

// How to convert the ApiRange object to HTML.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This range will be converted to HTML.");
let range = paragraph.GetRange(0, 36);
let html = range.ToHtml();
let paragraph2 = Api.CreateParagraph();
paragraph2.AddText("HTML output: " + html);
doc.Push(paragraph2);
