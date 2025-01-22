// This example sets a string label to the inline text content control.
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let inlineLvlSdt = Api.CreateInlineLvlSdt();
paragraph.AddInlineLvlSdt(inlineLvlSdt);
let run = Api.CreateRun();
run.AddText("This is an inline text content control with a label set to it.");
inlineLvlSdt.SetLabel("2147483647");
inlineLvlSdt.AddElement(run, 0);
let label = inlineLvlSdt.GetLabel();
paragraph = Api.CreateParagraph();
paragraph.AddText("Label: " + label);
doc.Push(paragraph);