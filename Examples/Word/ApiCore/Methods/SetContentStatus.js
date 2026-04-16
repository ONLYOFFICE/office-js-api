// Get the content status of the current document using the core properties in a document.

// How do I set content status in a document?

// Set content status using a core properties object in a document.

const doc = Api.GetDocument();
const core = doc.GetCore();
core.SetContentStatus("Final");

const contentStatus = core.GetContentStatus();
const paragraph = doc.GetElement(0);
paragraph.AddText("Content Status: " + contentStatus);