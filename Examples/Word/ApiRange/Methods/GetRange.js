// Extract a narrower text selection from within an existing highlighted region in a document.

// How do I cut out a smaller portion of text from an already selected region in a document?

// Trim a wider selection down to a tighter span for targeted editing in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("ONLYOFFICE Document Builder");
let range1 = doc.GetRange(0, 24);
range1.SetBold(true);
let range2 = range1.GetRange(0, 9);
range2.SetItalic(true);