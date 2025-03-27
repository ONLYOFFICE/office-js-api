// This example selects the current run.
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let run = Api.CreateRun();
run.AddText("This is just a sample text.");
paragraph.AddElement(run);
run.Select();
paragraph.AddLineBreak();
paragraph.AddText("The text from the first run was selected.");