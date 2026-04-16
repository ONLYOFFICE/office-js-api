// Get the version of the current document in a document.

// How to get the version for a core properties in a document?

// Get the version and display the result in a document.

const doc = Api.GetDocument();
const core = doc.GetCore();
core.SetVersion("v9.0");

const version = core.GetVersion();
let paragraph = doc.GetElement(0);
paragraph.AddText("Version: " + version);