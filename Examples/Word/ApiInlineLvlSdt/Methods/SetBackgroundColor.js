// Apply a background color to an inline content control in a document.

// How do I highlight an inline content control with a custom background color in a document?

// Shade a content control with a semi-transparent fill to make it stand out visually in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let inlineLvlSdt = Api.CreateInlineLvlSdt();
let run = Api.CreateRun();
run.AddText("This is an inline text content control with a transparent blue background.");
inlineLvlSdt.AddElement(run, 0);
inlineLvlSdt.SetBackgroundColor(Api.RGBA(0, 0, 255, 40));
paragraph.AddInlineLvlSdt(inlineLvlSdt);