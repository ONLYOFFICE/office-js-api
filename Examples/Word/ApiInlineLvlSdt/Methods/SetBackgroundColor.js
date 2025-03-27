// This example shows how to set the background color for the container.
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let inlineLvlSdt = Api.CreateInlineLvlSdt();
let run = Api.CreateRun();
run.AddText("This is an inline text content control with a transparent blue background.");
inlineLvlSdt.AddElement(run, 0);
inlineLvlSdt.SetBackgroundColor(0, 0, 255, 40);
paragraph.AddInlineLvlSdt(inlineLvlSdt);
