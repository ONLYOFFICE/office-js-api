// Store the date when a document was last printed in a document.

// How do I record the last print date for a document?

// Keep an audit trail of printing activity by saving the most recent print timestamp in a document.

const doc = Api.GetDocument();
const core = doc.GetCore();
core.SetLastPrinted(new Date());

const lastPrintedDate = core.GetLastPrinted().toDateString();
let paragraph = doc.GetElement(0);
paragraph.AddText("Last printed: " + lastPrintedDate);