// Set the revision of the current document in a document.

// How do I set revision in a document?

// Set revision using a core properties object in a document.

const doc = Api.GetDocument();
const core = doc.GetCore();
core.SetRevision("Rev. A");

const revision = core.GetRevision();
let paragraph = doc.GetElement(0);
paragraph.AddText("Revision: " + revision);