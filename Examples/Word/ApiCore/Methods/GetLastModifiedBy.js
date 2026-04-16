// Get the name of the last user who modified the current document in a document.

// How can I get last modified by using a core properties in a document?

// Get last modified by for a core properties in a document.

const doc = Api.GetDocument();
const core = doc.GetCore();
core.SetLastModifiedBy("Mark Pottato");

const lastModifiedBy = core.GetLastModifiedBy();
let paragraph = doc.GetElement(0);
paragraph.AddText("Last modified by: " + lastModifiedBy);