// Read the date when the document was last printed from its core properties in a document.

// How do I get the last printed date from the core properties in a document?

// Check the print history of a document to decide whether a fresh copy needs to be produced in a document.

const doc = Api.GetDocument();
const core = doc.GetCore();
core.SetLastPrinted(new Date());

const lastPrintedDate = core.GetLastPrinted().toDateString();
let paragraph = doc.GetElement(0);
paragraph.AddText("Last printed: " + lastPrintedDate);