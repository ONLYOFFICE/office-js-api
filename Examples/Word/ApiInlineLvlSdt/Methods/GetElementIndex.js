// Determine the index of an element inside an inline content control.

// The index reflects the position of a run within the inline content control.

// Locate a run placed inside an inline content control and report its index.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let inlineSdt = Api.CreateInlineLvlSdt();
paragraph.AddInlineLvlSdt(inlineSdt);
let run = Api.CreateRun();
run.AddText("nested run");
inlineSdt.AddElement(run);
let index = inlineSdt.GetElementIndex(run);
let report = Api.CreateParagraph();
report.AddText("The nested run is at index " + index + ".");
doc.Push(report);
