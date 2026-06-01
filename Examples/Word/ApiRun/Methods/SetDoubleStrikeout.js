// Draw two horizontal lines through the characters of a text run in a document.

// How do I apply a double strikethrough to a piece of text in a document?

// Cross out text with a double line to indicate deletion or emphasis in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let run = Api.CreateRun();
run.AddText("This is just a sample text. ");
paragraph.AddElement(run);
run = Api.CreateRun();
run.SetDoubleStrikeout(true);
run.AddText("This is a text run with the text struck out with two lines.");
paragraph.AddElement(run);