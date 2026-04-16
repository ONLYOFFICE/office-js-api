// Get the content status of the current document using the core properties in a document.

// How can I get the content status using a core properties in a document?

// Get the content status for a core properties in a document.

const doc = Api.GetDocument();
const core = doc.GetCore();
core.SetContentStatus("Final");

const contentStatus = core.GetContentStatus();
const paragraph = doc.GetElement(0);
paragraph.AddText("Content Status: " + contentStatus);