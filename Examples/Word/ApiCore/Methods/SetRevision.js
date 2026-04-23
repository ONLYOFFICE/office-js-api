// Assign a revision label to a document in a document.

// How do I mark a document with a specific revision identifier?

// Version-control a document by embedding a revision string in its core metadata in a document.

const doc = Api.GetDocument();
const core = doc.GetCore();
core.SetRevision("Rev. A");

const revision = core.GetRevision();
let paragraph = doc.GetElement(0);
paragraph.AddText("Revision: " + revision);