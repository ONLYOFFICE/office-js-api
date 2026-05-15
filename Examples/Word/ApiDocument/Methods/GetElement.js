// Access a document element by its index and add text to it in a document.

// How do I retrieve a specific element by position in a document?

// Target the first paragraph directly by index to insert a text run in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let run = Api.CreateRun();
run.AddText("This is just a sample text. Nothing special.");
paragraph.AddElement(run);