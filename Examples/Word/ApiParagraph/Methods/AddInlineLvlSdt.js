// Insert an inline content control into a paragraph in a document.

// How do I place a structured text field inside a paragraph in a document?

// Wrap a run of text in a bounded inline control so it can be managed or restricted separately within the paragraph in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let inlineLvlSdt = Api.CreateInlineLvlSdt();
let run = Api.CreateRun();
run.AddText("This is an inline text content control.");
inlineLvlSdt.AddElement(run, 0);
paragraph.AddInlineLvlSdt(inlineLvlSdt);