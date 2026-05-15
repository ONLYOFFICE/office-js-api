// Append a text run to an inline content control in a document.

// How do I add more text to an existing inline content control in a document?

// Extend a content control with a new run when building up inline text step by step in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let inlineLvlSdt = Api.CreateInlineLvlSdt();
paragraph.AddInlineLvlSdt(inlineLvlSdt);
let run = Api.CreateRun();
run.AddText("This is an inline text content control. ");
inlineLvlSdt.AddElement(run, 0);
run = Api.CreateRun();
run.AddText("This sentence was pushed here.");
inlineLvlSdt.Push(run);