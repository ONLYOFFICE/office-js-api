// Set the last-modified date for a document in a document.

// How do I update the modification timestamp of a document?

// Correct or backdate the recorded edit time to reflect when a document was actually changed in a document.

const doc = Api.GetDocument();
const core = doc.GetCore();
core.SetModified(new Date('1990-03-10'));

const lastModifiedDate = core.GetModified().toDateString();
let paragraph = doc.GetElement(0);
paragraph.AddText("Last modified: " + lastModifiedDate);