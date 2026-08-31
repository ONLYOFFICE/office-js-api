// Determine the index of a text run within its parent element.

// The position is the text run's index within its containing element.

// Read a run's position within its paragraph and write it into the document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("Intro ");
let run = Api.CreateRun();
run.AddText("measured run");
paragraph.AddElement(run);
let position = run.GetPosInParent();
let report = Api.CreateParagraph();
report.AddText("The run is at position " + position + " in its parent.");
doc.Push(report);
