// Specify a highlighting color which is applied as a background to the contents of the run in a document.

// How to set highlight to the text run in a document.

// Create a new text run and highlight it in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let run = Api.CreateRun();
run.AddText("This is just a sample text. ");
paragraph.AddElement(run);
run = Api.CreateRun();
run.SetHighlight("lightGray");
run.AddText("This is a text run with the text highlighted with light gray color.");
paragraph.AddElement(run);