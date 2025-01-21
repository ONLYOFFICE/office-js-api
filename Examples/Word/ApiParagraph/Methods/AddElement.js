// This example adds a Run to the paragraph.
let document = Api.GetDocument();
let paragraph = document.GetElement(0);
let run = Api.CreateRun();
run.AddText("This is just a text run. Nothing special.");
paragraph.AddElement(run);