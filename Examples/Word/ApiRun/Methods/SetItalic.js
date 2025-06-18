// This example sets the italic property to the text character.

// How to make text run italic.

// Create a new text run and make its style italic.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let run = Api.CreateRun();
run.AddText("This is just a sample text. ");
paragraph.AddElement(run);
run = Api.CreateRun();
run.SetItalic(true);
run.AddText("This is a text run with the font set to italicized letters.");
paragraph.AddElement(run);