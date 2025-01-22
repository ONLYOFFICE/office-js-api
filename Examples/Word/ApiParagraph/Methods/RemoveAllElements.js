// This example removes all the elements from the current paragraph.
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let run = Api.CreateRun();
run.AddText("This is the first text run in the current paragraph.");
paragraph.AddElement(run);
paragraph.RemoveAllElements();
run = Api.CreateRun();
run.AddText("We removed all the paragraph elements and added a new text run inside it.");
paragraph.AddElement(run);
doc.Push(paragraph);