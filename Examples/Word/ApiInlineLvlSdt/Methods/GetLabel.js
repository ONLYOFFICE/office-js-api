// This example shows how to get the label attribute for the container.
let document = Api.GetDocument();
let paragraph = document.GetElement(0);
let inlineLvlSdt = Api.CreateInlineLvlSdt();
let run = Api.CreateRun();
run.AddText("This is an inline text content control with a label set to it.");
inlineLvlSdt.AddElement(run, 0);
inlineLvlSdt.SetLabel("2147483647");
paragraph.AddInlineLvlSdt(inlineLvlSdt);
let label = inlineLvlSdt.GetLabel();
paragraph = Api.CreateParagraph();
paragraph.AddText("Label: " + label);
document.Push(paragraph);