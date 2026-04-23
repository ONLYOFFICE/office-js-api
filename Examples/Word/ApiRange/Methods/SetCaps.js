// Display a range of text in capital letters without changing the underlying content in a document.

// How do I make lowercase letters appear as capitals across a text range in a document?

// Force a section of text to render in uppercase for visual emphasis in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("ONLYOFFICE Document Builder");
let range = doc.GetRange(10, 17);
range.SetCaps(true);