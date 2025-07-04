// This example specifies the shading applied to the contents of the current text run.

// How to add shading to the text.

// Create a new text run and apply shading to it.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let run = Api.CreateRun();
run.AddText("This is just a sample text. ");
paragraph.AddElement(run);
run = Api.CreateRun();
run.SetShd("clear", 255, 111, 61);
run.AddText("This is a text run with the text shading set to orange.");
paragraph.AddElement(run);