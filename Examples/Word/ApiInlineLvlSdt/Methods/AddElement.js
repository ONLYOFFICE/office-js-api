// Add a run to the container in a document.

// How to add text run to the inline text element in a document.

// Add text to the inline control indicating the starting index in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let inlineLvlSdt = Api.CreateInlineLvlSdt();
paragraph.AddInlineLvlSdt(inlineLvlSdt);
let run = Api.CreateRun();
run.AddText("This is an inline text content control with a text run in it.");
inlineLvlSdt.AddElement(run, 0);