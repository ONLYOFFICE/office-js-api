// Add a comment to the run in a document.

// How to comment a specific text in a document.

// Insert a comment into the run and add an author to it in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let run = Api.CreateRun();
run.AddText("This is just a sample text. Nothing special.");
paragraph.AddElement(run);
run.AddComment("comment", "John Smith");