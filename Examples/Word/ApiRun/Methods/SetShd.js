// Specify the shading applied to the contents of the current text run in a document.

// How to add shading to the text in a document.

// Create a new text run and apply shading to it in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let run = Api.CreateRun();
run.AddText("This is just a sample text. ");
paragraph.AddElement(run);
run = Api.CreateRun();
run.SetShd("clear", Api.HexColor('#FF6F3D'));
run.AddText("This is a text run with the text shading set to orange.");
paragraph.AddElement(run);