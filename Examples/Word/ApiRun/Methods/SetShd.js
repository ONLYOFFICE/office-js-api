// This example specifies the shading applied to the contents of the current text run.
let document = Api.GetDocument();
let paragraph = document.GetElement(0);
let run = Api.CreateRun();
run.AddText("This is just a sample text. ");
paragraph.AddElement(run);
run = Api.CreateRun();
run.SetShd("clear", 255, 111, 61);
run.AddText("This is a text run with the text shading set to orange.");
paragraph.AddElement(run);