// Set the change tracking mode in a document.

// How to track revisions of the document.

// Start document tracking mode.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
doc.SetTrackRevisions(true);
paragraph.AddText("Track revisions mode was set.");