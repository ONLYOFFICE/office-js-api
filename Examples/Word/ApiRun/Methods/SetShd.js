// Apply a background shading color to a text run in a document.

// How do I shade the background behind a run of text in a document?

// Color the area behind words to make them stand out in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let run = Api.CreateRun();
run.AddText("This is just a sample text. ");
paragraph.AddElement(run);
run = Api.CreateRun();
run.SetShd("clear", Api.HexColor('#FF6F3D'));
run.AddText("This is a text run with the text shading set to orange.");
paragraph.AddElement(run);