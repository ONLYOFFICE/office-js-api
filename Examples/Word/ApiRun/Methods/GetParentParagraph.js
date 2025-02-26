// This example shows how to get a parent paragraph of run for further manipulation.
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is paragraph with example run: ");
let run = Api.CreateRun();
run.AddText('EXAMPLE RUN');
run.SetBold(true);
paragraph.AddElement(run);
let parentParagraph = run.GetParentParagraph();
parentParagraph.SetItalic(true);
paragraph = Api.CreateParagraph();
paragraph.AddText("The parent paragraph of run was set to Italic");
doc.Push(paragraph);