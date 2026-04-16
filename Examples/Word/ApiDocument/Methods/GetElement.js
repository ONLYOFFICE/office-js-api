// Get an element by its position in the document.

// How to get element knowing its index in a document.

// Get the first paragraph and add text to it in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let run = Api.CreateRun();
run.AddText("This is just a sample text. Nothing special.");
paragraph.AddElement(run);