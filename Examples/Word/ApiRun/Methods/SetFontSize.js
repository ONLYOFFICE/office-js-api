// Change the font size of a text run in a document.

// How do I make the text in a run larger or smaller in a document?

// Adjust the character size of a run to control its visual weight in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let run = Api.CreateRun();
run.AddText("This is just a sample text. ");
paragraph.AddElement(run);
run = Api.CreateRun();
run.SetFontSize(30);
run.AddText("This is a text run with the font size set to 15 points (30 half-points).");
paragraph.AddElement(run);