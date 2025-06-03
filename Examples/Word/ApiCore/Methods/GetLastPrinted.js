// This example demonstrates how to get the date when the current document was last printed.

const document = Api.GetDocument();
const core = document.GetCore();
core.SetLastPrinted(new Date());

const lastPrintedDate = core.GetLastPrinted().toDateString();
let paragraph = document.GetElement(0);
paragraph.AddText("Last printed: " + lastPrintedDate);
