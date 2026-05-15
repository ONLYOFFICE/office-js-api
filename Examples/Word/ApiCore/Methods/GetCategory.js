// Read the category field from a document's built-in core properties in a document.

// How do I retrieve the category metadata stored in a document?

// Inspect the category to verify or display how a document is classified within a collection in a document.

const doc = Api.GetDocument();
const core = doc.GetCore();
core.SetCategory("Examples");

const category = core.GetCategory();
let paragraph = doc.GetElement(0);
paragraph.AddText("Category: " + category);