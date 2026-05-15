// Store a version string in the core properties of a document in a document.

// How do I tag a document with a version number in its metadata?

// Track release stages by embedding a version label directly in a document's properties in a document.

const doc = Api.GetDocument();
const core = doc.GetCore();
core.SetVersion("v9.0");

const version = core.GetVersion();
let paragraph = doc.GetElement(0);
paragraph.AddText("Version: " + version);