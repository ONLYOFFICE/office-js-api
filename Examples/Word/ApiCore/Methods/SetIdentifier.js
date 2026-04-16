// Set the identifier of the current document using the core properties in a document.

// How to set identifier for a core properties in a document?

// Set identifier and display the result in a document.

const doc = Api.GetDocument();
const core = doc.GetCore();
core.SetIdentifier("#ID42");

const identifier = core.GetIdentifier();
let paragraph = doc.GetElement(0);
paragraph.AddText("Identifier: " + identifier);