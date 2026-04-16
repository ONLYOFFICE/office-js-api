// Add a tab stop to the paragraph in a document.

// How to separate two texts with tabs in a document.

// Insert tabs to the paragraph in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is just a sample text. After it three tab stops will be added.");
paragraph.AddTabStop();
paragraph.AddTabStop();
paragraph.AddTabStop();
paragraph.AddText("This is the text which starts after the tab stops.");