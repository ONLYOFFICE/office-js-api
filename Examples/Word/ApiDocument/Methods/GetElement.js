// This example shows how to get an element by its position in the document.

// How to get element knowing its index.

// Get the first paragraph and add text to it.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let run = Api.CreateRun();
run.AddText("This is just a sample text. Nothing special.");
paragraph.AddElement(run);