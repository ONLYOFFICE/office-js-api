// Assign a category to the document through its core properties in a document.

// How do I tag a document with a category in its metadata in a document?

// Record which group or type a document belongs to so it can be filtered later in a document.

const doc = Api.GetDocument();
const core = doc.GetCore();
core.SetCategory("Examples");

const category = core.GetCategory();
let paragraph = doc.GetElement(0);
paragraph.AddText("Category: " + category);