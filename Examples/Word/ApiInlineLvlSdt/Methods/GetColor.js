// Read the tag color of an inline content control in a document.

// How do I get the color assigned to an inline content control in a document?

// Compare the tag colors of multiple content controls to audit their visual coding in a document.

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