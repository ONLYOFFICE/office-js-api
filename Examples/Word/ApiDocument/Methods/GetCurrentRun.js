// This example shows how to get a current run for further manipulation.
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