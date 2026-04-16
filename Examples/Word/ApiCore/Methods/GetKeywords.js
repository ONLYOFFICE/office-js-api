// Get the keywords of the current document using the core properties in a document.

// How do I get the keywords in a document?

// Get the keywords using a core properties object in a document.

const doc = Api.GetDocument();
const core = doc.GetCore();
core.SetKeywords("Example; ApiCore; Document");

const keywords = core.GetKeywords();
let paragraph = doc.GetElement(0);
paragraph.AddText("Keywords: " + keywords);