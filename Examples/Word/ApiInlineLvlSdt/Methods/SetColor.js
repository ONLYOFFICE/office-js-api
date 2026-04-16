// Set the tag color for the container in a document.

// Create an inline content control and set the color to it in a document.

// How to set the color to the inline content control object in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let inlineLvlSdt = Api.CreateInlineLvlSdt();
let run = Api.CreateRun();
run.AddText("This is an inline text content control with a blue tag color.");
inlineLvlSdt.AddElement(run, 0);
inlineLvlSdt.SetColor(Api.RGB(0, 0, 255));
paragraph.AddInlineLvlSdt(inlineLvlSdt);