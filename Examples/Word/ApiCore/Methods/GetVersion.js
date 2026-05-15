// Extract the version string from the document's core properties in a document.

// How do I retrieve the version recorded in a document's metadata in a document?

// Confirm the stored version value is accessible by writing it into the document body in a document.

const doc = Api.GetDocument();
const core = doc.GetCore();
core.SetVersion("v9.0");

const version = core.GetVersion();
let paragraph = doc.GetElement(0);
paragraph.AddText("Version: " + version);