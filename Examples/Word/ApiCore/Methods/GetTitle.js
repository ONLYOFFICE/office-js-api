// Fetch the title stored in the document's core properties in a document.

// How do I read the title from a document's metadata in a document?

// Confirm the document title is set correctly by inserting it as text into the document body in a document.

const doc = Api.GetDocument();
const core = doc.GetCore();
core.SetTitle("My Document Title");

const title = core.GetTitle();
let paragraph = doc.GetElement(0);
paragraph.AddText("Title: " + title);