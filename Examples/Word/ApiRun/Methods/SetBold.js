// Apply bold formatting to a text run in a document.

// How do I make a piece of text appear bold in a document?

// Emphasize a run by making its characters heavier and thicker in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let run = Api.CreateRun();
run.AddText("This is just a sample text. ");
paragraph.AddElement(run);
run = Api.CreateRun();
run.SetBold(true);
run.AddText("This is a text run with the font set to bold.");
paragraph.AddElement(run);