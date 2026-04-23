// Read the description stored in the core properties of a document.

// How do I retrieve the description text from the core properties in a document?

// Display a document's summary text to give readers context about its contents in a document.

const doc = Api.GetDocument();
const core = doc.GetCore();
core.SetDescription("This is a sample document made to help fellow users understand how to use the ApiCore methods.");

const description = core.GetDescription();
let paragraph = doc.GetElement(0);
paragraph.AddText("Description: " + description);