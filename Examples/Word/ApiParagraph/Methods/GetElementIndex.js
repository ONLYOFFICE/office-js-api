// Determine the index of an inline element inside a paragraph.

// The index reflects the position of a specific run within its paragraph.

// Locate a run inside a paragraph and report its index back into the document.

let doc = Api.GetDocument();
let paragraph = Api.CreateParagraph();
paragraph.AddText("Start ");
let run = Api.CreateRun();
run.AddText("target run");
paragraph.AddElement(run);
paragraph.AddText(" end");
doc.Push(paragraph);
let index = paragraph.GetElementIndex(run);
let report = Api.CreateParagraph();
report.AddText("The target run is at index " + index + ".");
doc.Push(report);
