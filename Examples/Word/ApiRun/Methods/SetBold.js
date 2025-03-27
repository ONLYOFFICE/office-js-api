// This example sets the bold property to the text character.
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let run = Api.CreateRun();
run.AddText("This is just a sample text. ");
paragraph.AddElement(run);
run = Api.CreateRun();
run.SetBold(true);
run.AddText("This is a text run with the font set to bold.");
paragraph.AddElement(run);