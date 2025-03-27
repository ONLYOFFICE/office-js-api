// This example sets the text color for the current text run in the RGB format.
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let run = Api.CreateRun();
run.AddText("This is just a sample text. ");
paragraph.AddElement(run);
run = Api.CreateRun();
run.SetColor(255, 111, 61);
run.AddText("This is a text run with the font color set to orange.");
paragraph.AddElement(run);