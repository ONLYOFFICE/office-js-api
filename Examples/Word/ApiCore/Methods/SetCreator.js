// Store the author's name in the document's core properties in a document.

// How do I set the creator field in a document's metadata in a document?

// Attribute ownership of the document by writing the author's name into the built-in properties in a document.

const doc = Api.GetDocument();
const core = doc.GetCore();
core.SetCreator("John Smith");

const creator = core.GetCreator();
const paragraph = doc.GetElement(0);
paragraph.AddText("Creator: " + creator);
	