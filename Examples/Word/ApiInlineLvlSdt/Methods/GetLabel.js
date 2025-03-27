// This example shows how to get the label attribute for the container.
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let inlineLvlSdt = Api.CreateInlineLvlSdt();
let run = Api.CreateRun();
run.AddText("This is an inline text content control with a label set to it.");
inlineLvlSdt.AddElement(run, 0);
inlineLvlSdt.SetLabel("2147483647");
paragraph.AddInlineLvlSdt(inlineLvlSdt);
let label = inlineLvlSdt.GetLabel();
paragraph = Api.CreateParagraph();
paragraph.AddText("Label: " + label);
doc.Push(paragraph);