// Access the paragraph that contains a text run in a document.

// How do I get the paragraph that holds a particular text run in a document?

// Navigate from a text run up to its surrounding paragraph in a document.

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