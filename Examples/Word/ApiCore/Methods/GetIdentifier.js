// Get the identifier of the current document using the core properties in a document.

// How do I get the identifier in a document?

// Get the identifier using a core properties object in a document.

const doc = Api.GetDocument();
const core = doc.GetCore();
core.SetIdentifier("#ID42");

const identifier = core.GetIdentifier();
let paragraph = doc.GetElement(0);
paragraph.AddText("Identifier: " + identifier);