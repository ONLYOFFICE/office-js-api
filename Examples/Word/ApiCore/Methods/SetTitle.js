// Set the title in the core properties of a document in a document.

// How do I give a document a formal title in its metadata?

// Name a document for easier identification in file managers and document management systems in a document.

const doc = Api.GetDocument();
const core = doc.GetCore();
core.SetTitle("My Document Title");

const title = core.GetTitle();
let paragraph = doc.GetElement(0);
paragraph.AddText("Title: " + title);