// Read the last modification date stored in the core properties of a document.

// How do I get the date a document was last modified from its core properties in a document?

// Compare the modification timestamp against a deadline to flag outdated content in a document.

const doc = Api.GetDocument();
const core = doc.GetCore();
core.SetModified(new Date('1990-03-10'));

const lastModifiedDate = core.GetModified().toDateString();
let paragraph = doc.GetElement(0);
paragraph.AddText("Last modified: " + lastModifiedDate);