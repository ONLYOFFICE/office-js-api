// This example adds a comment to the run.

// How to comment a specific text.

// Insert a comment into the run and add an author to it.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let run = Api.CreateRun();
run.AddText("This is just a sample text. Nothing special.");
paragraph.AddElement(run);
run.AddComment("comment", "John Smith");