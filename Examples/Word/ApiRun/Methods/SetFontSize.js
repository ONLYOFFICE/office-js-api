// This example sets the font size to the characters of the current text run.
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let run = Api.CreateRun();
run.AddText("This is just a sample text. ");
paragraph.AddElement(run);
run = Api.CreateRun();
run.SetFontSize(30);
run.AddText("This is a text run with the font size set to 15 points (30 half-points).");
paragraph.AddElement(run);