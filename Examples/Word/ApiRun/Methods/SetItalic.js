// Format a text run with italic styling in a document.

// How do I make a portion of text appear slanted or italicized in a document?

// Emphasize words by switching a run to italic lettering in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let run = Api.CreateRun();
run.AddText("This is just a sample text. ");
paragraph.AddElement(run);
run = Api.CreateRun();
run.SetItalic(true);
run.AddText("This is a text run with the font set to italicized letters.");
paragraph.AddElement(run);