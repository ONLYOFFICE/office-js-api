// Set the highlight color of an inline content control in a document.

// How do I change the color of an inline content control in a document?

// Apply a specific RGB color to visually distinguish a content control in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let inlineLvlSdt = Api.CreateInlineLvlSdt();
let run = Api.CreateRun();
run.AddText("This is an inline text content control with a blue tag color.");
inlineLvlSdt.AddElement(run, 0);
inlineLvlSdt.SetColor(Api.RGB(0, 0, 255));
paragraph.AddInlineLvlSdt(inlineLvlSdt);