// Save a list of keywords in the document's core properties in a document.

// How do I add searchable keywords to a document's metadata in a document?

// Improve discoverability by tagging the document with relevant terms stored in its built-in properties in a document.

const doc = Api.GetDocument();
const core = doc.GetCore();
core.SetKeywords("Example; ApiCore; Document");

const keywords = core.GetKeywords();
let paragraph = doc.GetElement(0);
paragraph.AddText("Keywords: " + keywords);