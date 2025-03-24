// This example specifies that any lowercase characters in the current text run are formatted for display only as their capital letter character equivalents.

// How to make a text capitalized.

// Get the text properties of the run and set its letters uppercase.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let run = Api.CreateRun();
run.AddText("This is just a sample text. ");
paragraph.AddElement(run);
run = Api.CreateRun();
run.SetCaps(true);
run.AddText("This is a text run with the font set to capitalized letters.");
paragraph.AddElement(run);