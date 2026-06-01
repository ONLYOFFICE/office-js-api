// Write a descriptive summary into the document's core properties in a document.

// How do I add a description to a document's built-in metadata in a document?

// Provide context about a document's purpose by saving a plain-text summary in its properties in a document.

const doc = Api.GetDocument();
const core = doc.GetCore();
core.SetDescription("This is a sample document made to help fellow users understand how to use the ApiCore methods.");

const description = core.GetDescription();
let paragraph = doc.GetElement(0);
paragraph.AddText("Description: " + description);