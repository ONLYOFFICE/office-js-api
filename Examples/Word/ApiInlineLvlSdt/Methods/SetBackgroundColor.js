// Set the background color for the container in a document.

// How can I set background color using an inline content control in a document?

// Set background color for an inline content control in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let inlineLvlSdt = Api.CreateInlineLvlSdt();
let run = Api.CreateRun();
run.AddText("This is an inline text content control with a transparent blue background.");
inlineLvlSdt.AddElement(run, 0);
inlineLvlSdt.SetBackgroundColor(Api.RGBA(0, 0, 255, 40));
paragraph.AddInlineLvlSdt(inlineLvlSdt);