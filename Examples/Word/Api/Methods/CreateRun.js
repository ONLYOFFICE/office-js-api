// This example creates a run and inserts it into the document.
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let run = Api.CreateRun();
run.AddText("This is a text run");
paragraph.AddElement(run);