// Check if change tracking mode is enabled or not in a document.

// How to track revisions of the document.

// Get a boolean value that shows whether revision tracking is enabled or not in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
doc.SetTrackRevisions(true);
let trackRevisions = doc.IsTrackRevisions();
paragraph.AddText("Change tracking is enabled: " + trackRevisions);