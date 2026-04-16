// Specify that the contents of the current run are displayed with two horizontal lines through each character displayed on the line in a document.

// How to strike out a text with two lines in a document.

// Create a new text run and set double strikeout to it in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let run = Api.CreateRun();
run.AddText("This is just a sample text. ");
paragraph.AddElement(run);
run = Api.CreateRun();
run.SetDoubleStrikeout(true);
run.AddText("This is a text run with the text struck out with two lines.");
paragraph.AddElement(run);