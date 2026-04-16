// Get a current run for further manipulation in a document.

// How to get current run for a document?

// Get current run and display the result in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is paragraph with example run: ");
let run = Api.CreateRun();
run.AddText('EXAMPLE RUN');
run.SetBold(true);
paragraph.AddElement(run);
run.MoveCursorToPos(0);
let currentRun = doc.GetCurrentRun();
currentRun.SetItalic(true);
paragraph = Api.CreateParagraph();
paragraph.AddText("The current run was set to Bold and Italic");
doc.Push(paragraph);