// Turn change-tracking mode on or off in a document.

// How do I enable revision tracking so all edits are recorded in a document?

// Activate tracked changes before editing so reviewers can accept or reject each modification later.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
doc.SetTrackRevisions(true);
paragraph.AddText("Track revisions mode was set.");