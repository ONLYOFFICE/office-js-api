// Place a string of text into a run and add it to a paragraph in a document.

// How do I write a sentence into a text run and display it in a document?

// Build a paragraph by filling a text run with content in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let run = Api.CreateRun();
run.AddText("This is just a sample text. Nothing special.");
paragraph.AddElement(run);