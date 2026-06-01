// Insert tab stops to align text within a paragraph in a document.

// How do I add horizontal spacing between words using tab characters in a document?

// Position a block of text further along the line by placing multiple tab stops after an opening sentence in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is just a sample text. After it three tab stops will be added.");
paragraph.AddTabStop();
paragraph.AddTabStop();
paragraph.AddTabStop();
paragraph.AddText("This is the text which starts after the tab stops.");