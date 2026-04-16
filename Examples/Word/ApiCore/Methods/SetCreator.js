// Set the creator of the current document using the core properties in a document.

// How to set creator for a core properties in a document?

// Set creator and display the result in a document.

const doc = Api.GetDocument();
const core = doc.GetCore();
core.SetCreator("John Smith");

const creator = core.GetCreator();
const paragraph = doc.GetElement(0);
paragraph.AddText("Creator: " + creator);
	