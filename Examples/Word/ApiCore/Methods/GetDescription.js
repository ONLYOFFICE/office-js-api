// Get the description of the current document using the core properties in a document.

// How can I get the description using a core properties in a document?

// Get the description for a core properties in a document.

const doc = Api.GetDocument();
const core = doc.GetCore();
core.SetDescription("This is a sample document made to help fellow users understand how to use the ApiCore methods.");

const description = core.GetDescription();
let paragraph = doc.GetElement(0);
paragraph.AddText("Description: " + description);