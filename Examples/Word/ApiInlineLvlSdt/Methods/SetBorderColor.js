// This example shows how to set the border color for the container.
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let inlineLvlSdt = Api.CreateInlineLvlSdt();
let run = Api.CreateRun();
run.AddText("This is an inline text content control with blue border.");
inlineLvlSdt.AddElement(run, 0);
inlineLvlSdt.SetBorderColor(0, 0, 255, 255);
paragraph.AddInlineLvlSdt(inlineLvlSdt);
