// Move the cursor to the start of a text run in a document.

// The cursor is placed before the first character of the run, even if the run is in the middle of a paragraph.

// Insert text at the beginning of the bold run.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("Regular text. ");
let run = Api.CreateRun();
run.SetBold(true);
run.AddText("Bold text.");
paragraph.AddElement(run);
paragraph.AddText(" Regular text again.");
run.MoveCursorToStart();
doc.EnterText("Start of the run. ");
