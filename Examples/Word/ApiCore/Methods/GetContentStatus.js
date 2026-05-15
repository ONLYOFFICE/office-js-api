// Read the content status stored in the core properties of a document.

// How do I retrieve the content status value from the core properties in a document?

// Check whether a document is marked as Draft, Final, or another status in a document.

const doc = Api.GetDocument();
const core = doc.GetCore();
core.SetContentStatus("Final");

const contentStatus = core.GetContentStatus();
const paragraph = doc.GetElement(0);
paragraph.AddText("Content Status: " + contentStatus);