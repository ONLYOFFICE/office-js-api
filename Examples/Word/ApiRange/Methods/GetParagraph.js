// Pick a specific paragraph by position from the paragraphs within a text selection in a document.

// How do I access a particular paragraph inside a highlighted region in a document?

// Target one paragraph among several in a selected area to apply formatting in a document.

let doc = Api.GetDocument();
let firstParagraph = doc.GetElement(0);
firstParagraph.AddText("First paragraph");
let secondParagraph = Api.CreateParagraph();
secondParagraph.AddText("Second Paragraph");
doc.Push(secondParagraph);
let range = doc.GetRange(0, 28);
let rangeParagraph = range.GetParagraph(1);
rangeParagraph.SetBold("true");