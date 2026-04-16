// Specify that the contents of the current run are displayed with a single horizontal line through the center of the line in a document.

// How to strike out a text run in a document.

// Create a new text run and set cross it out in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let run = Api.CreateRun();
run.AddText("This is just a sample text. ");
paragraph.AddElement(run);
run = Api.CreateRun();
run.SetStrikeout(true);
run.AddText("This is a text run with the text struck out with a single line.");
paragraph.AddElement(run);