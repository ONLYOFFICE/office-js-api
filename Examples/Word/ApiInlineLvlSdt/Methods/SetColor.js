// This example sets the tag color for the container.

// Creates an inline content control and sets the color to it.

// How to set the color to the ApiInlineLvlSdt object.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let inlineLvlSdt = Api.CreateInlineLvlSdt();
let run = Api.CreateRun();
run.AddText("This is an inline text content control with a blue tag color.");
inlineLvlSdt.AddElement(run, 0);
inlineLvlSdt.SetColor(Api.RGB(0, 0, 255));
paragraph.AddInlineLvlSdt(inlineLvlSdt);
