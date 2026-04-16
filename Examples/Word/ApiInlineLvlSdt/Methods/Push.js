// Pushes a run to actually add it to the container in a document.

// How to insert the text into the inline content control in a document.

// Add the text run to the inline text element in a document.

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