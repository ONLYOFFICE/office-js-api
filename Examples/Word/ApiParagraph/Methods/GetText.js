// Extract the plain text content of a paragraph in a document.

// How do I read the text string from a paragraph in a document?

// Retrieve paragraph text with custom separators and print it in a second paragraph in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("\tThis is just a sample text.");
let text = paragraph.GetText({"Numbering": true, "Math": true, "NewLineSeparator": "\r", "TabSymbol": "\t"});
paragraph = Api.CreateParagraph();
paragraph.AddText("The text of the first paragraph: " + text);
doc.Push(paragraph);