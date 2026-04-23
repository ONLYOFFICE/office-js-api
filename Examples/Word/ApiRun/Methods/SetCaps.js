// Display all letters in a text run as capitals without changing the underlying text in a document.

// How do I make a run appear in all capital letters in a document?

// Render lowercase characters as uppercase for visual effect in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let run = Api.CreateRun();
run.AddText("This is just a sample text. ");
paragraph.AddElement(run);
run = Api.CreateRun();
run.SetCaps(true);
run.AddText("This is a text run with the font set to capitalized letters.");
paragraph.AddElement(run);