// Get the creation date of the current document in a document.

// How can I get the created using a core properties in a document?

// Get the created for a core properties in a document.

const doc = Api.GetDocument();
const core = doc.GetCore();
core.SetCreated(new Date('20 January 2000'));

const createdDate = core.GetCreated().toDateString();
let paragraph = doc.GetElement(0);
paragraph.AddText("Created: " + createdDate);