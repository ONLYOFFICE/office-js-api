// This example shows how to get an element by its position in the document.
let document = Api.GetDocument();
let paragraph = document.GetElement(0);
let run = Api.CreateRun();
run.AddText("This is just a sample text. Nothing special.");
paragraph.AddElement(run);