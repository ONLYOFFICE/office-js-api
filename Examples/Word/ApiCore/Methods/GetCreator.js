// Get the creator of the current document using the core properties in a document.

// How do I get the creator in a document?

// Get the creator using a core properties object in a document.

const doc = Api.GetDocument();
const core = doc.GetCore();
core.SetCreator("John Smith");

const creator = core.GetCreator();
const paragraph = doc.GetElement(0);
paragraph.AddText("Creator: " + creator);