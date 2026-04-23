// Read the vertical offset applied to a run of text in a document.

// How do I find out by how much a piece of text is raised or lowered in a document?

// Inspect a text run to confirm its vertical shift relative to the baseline in a document.

let doc = Api.GetDocument();
let myNewRunStyle = doc.CreateStyle("My New Run Style", "run");
let textPr = myNewRunStyle.GetTextPr();
textPr.SetCaps(true);
textPr.SetFontFamily("Calibri Light");
let paragraph = doc.GetElement(0);
let run = Api.CreateRun();
run.AddText("This is just a sample text. ");
run.AddText("The text properties are changed and the style is added to the paragraph. ");
paragraph.AddElement(run);
run = Api.CreateRun();
run.SetStyle(myNewRunStyle);
run.AddText("This is a text run with its own style.");
textPr = run.GetTextPr();
textPr.SetPosition(10);
paragraph.AddElement(run);
paragraph = Api.CreateParagraph();
let position = textPr.GetPosition();
paragraph.AddText("Text position: " + position);
doc.Push(paragraph);