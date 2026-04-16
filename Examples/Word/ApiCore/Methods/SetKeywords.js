// Set the keywords of the current document using the core properties in a document.

// How can I set keywords using a core properties in a document?

// Set keywords for a core properties in a document.

const doc = Api.GetDocument();
const core = doc.GetCore();
core.SetKeywords("Example; ApiCore; Document");

const keywords = core.GetKeywords();
let paragraph = doc.GetElement(0);
paragraph.AddText("Keywords: " + keywords);