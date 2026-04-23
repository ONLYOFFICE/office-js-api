// Record the name of the last person who modified a document in a document.

// How do I store the author name of the most recent edit in a document?

// Track document ownership and editing history by saving the modifier's name in a document.

const doc = Api.GetDocument();
const core = doc.GetCore();
core.SetLastModifiedBy("Mark Pottato");

const lastModifiedBy = core.GetLastModifiedBy();
let paragraph = doc.GetElement(0);
paragraph.AddText("Last modified by: " + lastModifiedBy);