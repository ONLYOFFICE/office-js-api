// Raise or lower a text run relative to the surrounding baseline in a document.

// How do I shift a word up or down from the normal line of text in a document?

// Adjust the vertical offset of characters to create superscript or subscript effects in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let run = Api.CreateRun();
run.AddText("This is just a sample text. ");
paragraph.AddElement(run);
run = Api.CreateRun();
run.SetPosition(10);
run.AddText("This is a text run with the text raised 5 points (10 half-points).");
paragraph.AddElement(run);
run = Api.CreateRun();
run.SetPosition(-16);
run.AddText("This is a text run with the text lowered 8 points (16 half-points).");
paragraph.AddElement(run);