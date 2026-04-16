// Get the title of the current document in a document.

// How can I get the title using a core properties in a document?

// Get the title for a core properties in a document.

const doc = Api.GetDocument();
const core = doc.GetCore();
core.SetTitle("My Document Title");

const title = core.GetTitle();
let paragraph = doc.GetElement(0);
paragraph.AddText("Title: " + title);