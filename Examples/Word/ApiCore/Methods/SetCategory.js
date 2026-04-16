// Set the category of the document using the core properties in a document.

// How can I set category using a core properties in a document?

// Set category for a core properties in a document.

const doc = Api.GetDocument();
const core = doc.GetCore();
core.SetCategory("Examples");

const category = core.GetCategory();
let paragraph = doc.GetElement(0);
paragraph.AddText("Category: " + category);