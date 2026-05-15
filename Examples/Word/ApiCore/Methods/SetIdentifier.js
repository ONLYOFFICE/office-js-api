// Assign a unique identifier to the document through its core properties in a document.

// How do I store a custom ID string in a document's metadata in a document?

// Link a document to an external system by embedding its tracking ID in the built-in properties in a document.

const doc = Api.GetDocument();
const core = doc.GetCore();
core.SetIdentifier("#ID42");

const identifier = core.GetIdentifier();
let paragraph = doc.GetElement(0);
paragraph.AddText("Identifier: " + identifier);