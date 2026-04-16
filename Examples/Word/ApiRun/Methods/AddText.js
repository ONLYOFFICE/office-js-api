// Add some text to the run in a document.

// How to add a sentence to the text run in a document.

// Add text to the document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let run = Api.CreateRun();
run.AddText("This is just a sample text. Nothing special.");
paragraph.AddElement(run);