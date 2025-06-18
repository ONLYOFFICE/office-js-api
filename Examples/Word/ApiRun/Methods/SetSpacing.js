// This example sets the text spacing measured in twentieths of a point.

// How to resize spacing between words in a text run.

// Create a new text run and set its spacing size (point * 20).

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let run = Api.CreateRun();
run.AddText("This is just a sample text. ");
paragraph.AddElement(run);
run = Api.CreateRun();
run.SetSpacing(80);
run.AddText("This is a text run with the text spacing set to 4 points (20 twentieths of a point).");
paragraph.AddElement(run);