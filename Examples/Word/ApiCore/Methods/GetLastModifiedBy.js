// Read the name of the last editor stored in the core properties of a document.

// How do I find out who last modified a document using its core properties in a document?

// Audit recent changes by identifying which user saved the most recent version in a document.

const doc = Api.GetDocument();
const core = doc.GetCore();
core.SetLastModifiedBy("Mark Pottato");

const lastModifiedBy = core.GetLastModifiedBy();
let paragraph = doc.GetElement(0);
paragraph.AddText("Last modified by: " + lastModifiedBy);