// Mark the content status of a document in its core properties in a document.

// How do I record whether a document is a draft, review, or final version in a document?

// Attach a workflow stage label to the document so collaborators know its current state in a document.

const doc = Api.GetDocument();
const core = doc.GetCore();
core.SetContentStatus("Final");

const contentStatus = core.GetContentStatus();
const paragraph = doc.GetElement(0);
paragraph.AddText("Content Status: " + contentStatus);