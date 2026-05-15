// Select a specific text range by character positions in a document.

// How do I get a range of characters using start and end indexes in a document?

// Apply bold formatting to a precise word by targeting it with index-based range selection in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is just a sample text.");
let range = doc.GetRange(8, 11);
range.SetBold(true);