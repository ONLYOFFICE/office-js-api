// This example adds a Run to the paragraph.

// How to add an element to the paragraph.

// Create a text run and insert it to the paragraph.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let run = Api.CreateRun();
run.AddText("This is just a text run. Nothing special.");
paragraph.AddElement(run);