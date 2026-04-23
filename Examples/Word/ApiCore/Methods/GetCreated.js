// Read the creation date stored in the core properties of a document.

// How do I get the date a document was created from its core properties in a document?

// Display when a document was first made to track its history in a document.

const doc = Api.GetDocument();
const core = doc.GetCore();
core.SetCreated(new Date('20 January 2000'));

const createdDate = core.GetCreated().toDateString();
let paragraph = doc.GetElement(0);
paragraph.AddText("Created: " + createdDate);