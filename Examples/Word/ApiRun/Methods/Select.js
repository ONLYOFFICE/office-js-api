// Select the current run in a document.

// How to select a text with a cursor in a document.

// Select and display the result in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let run = Api.CreateRun();
run.AddText("This is just a sample text.");
paragraph.AddElement(run);
run.Select();
paragraph.AddLineBreak();
paragraph.AddText("The text from the first run was selected.");