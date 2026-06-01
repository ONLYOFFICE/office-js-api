// Draw a horizontal line through the middle of a text run in a document.

// How do I cross out a word or phrase to show it has been removed in a document?

// Mark text as deleted or negated by adding a strikethrough line in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let run = Api.CreateRun();
run.AddText("This is just a sample text. ");
paragraph.AddElement(run);
run = Api.CreateRun();
run.SetStrikeout(true);
run.AddText("This is a text run with the text struck out with a single line.");
paragraph.AddElement(run);