// Add a text watermark to every page in a document.

// How do I stamp a watermark string across all pages in a document?

// Mark draft or confidential content by overlaying a repeating label on each printed page.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("A watermark was inserted into this document.");
doc.InsertWatermark("Watermark");