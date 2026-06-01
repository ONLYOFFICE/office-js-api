// Display lowercase letters as smaller capital letters in a text run in a document.

// How do I make text appear in small capitals without changing the original letters in a document?

// Style a run so that all characters render as compact uppercase glyphs in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let run = Api.CreateRun();
run.AddText("This is just a sample text. ");
paragraph.AddElement(run);
run = Api.CreateRun();
run.SetSmallCaps(true);
run.AddText("This is a text run with the font set to small capitalized letters.");
paragraph.AddElement(run);