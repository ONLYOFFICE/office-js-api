// Attach a reviewer note with an author name to a piece of text in a document.

// How do I leave a named comment on a specific section of text in a document?

// Annotate a text passage so collaborators can see feedback and who wrote it in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let run = Api.CreateRun();
run.AddText("This is just a sample text. Nothing special.");
paragraph.AddElement(run);
run.AddComment("comment", "John Smith");