// Read the unique identifier stored in the core properties of a document.

// How do I get the identifier value from the core properties in a document?

// Look up a document's assigned ID to reference it in an external system in a document.

const doc = Api.GetDocument();
const core = doc.GetCore();
core.SetIdentifier("#ID42");

const identifier = core.GetIdentifier();
let paragraph = doc.GetElement(0);
paragraph.AddText("Identifier: " + identifier);