// Insert a text run into an inline content control at a specific position in a document.

// How do I add a run element to an inline content control in a document?

// Populate an inline content control by placing a run at a chosen index in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let inlineLvlSdt = Api.CreateInlineLvlSdt();
paragraph.AddInlineLvlSdt(inlineLvlSdt);
let run = Api.CreateRun();
run.AddText("This is an inline text content control with a text run in it.");
inlineLvlSdt.AddElement(run, 0);