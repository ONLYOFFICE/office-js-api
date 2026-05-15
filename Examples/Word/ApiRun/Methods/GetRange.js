// Select a portion of a text run by character positions in a document.

// How do I pick out a specific slice of text within a run in a document?

// Target a character range inside a text run for formatting in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let run = Api.CreateRun();
run.AddText("This is just a sample text.");
paragraph.AddElement(run);
let range = run.GetRange(0, 3);
range.SetBold(true);