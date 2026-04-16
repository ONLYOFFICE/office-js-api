// Get the tag color of the container in a document.

// Create an inline content control, set the color to it, and return its color in a document.

// How to return the color of the inline content control object in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let inlineLvlSdt = Api.CreateInlineLvlSdt();
let run = Api.CreateRun();
inlineLvlSdt.SetColor(Api.RGB(0, 0, 255));
let color = inlineLvlSdt.GetColor();
run.AddText("Color: " + (color ? color.GetHex() : "none"));
inlineLvlSdt.AddElement(run, 0);
paragraph.AddInlineLvlSdt(inlineLvlSdt);

inlineLvlSdt = Api.CreateInlineLvlSdt();
run = Api.CreateRun();
color = inlineLvlSdt.GetColor();
run.AddText("Color: " + (color ? color.GetHex() : "none"));
inlineLvlSdt.AddElement(run, 0);
paragraph.AddInlineLvlSdt(inlineLvlSdt);