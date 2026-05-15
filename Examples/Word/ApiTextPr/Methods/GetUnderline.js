// Check whether an underline is applied to a text run in a document.

// How do I find out if a piece of text has an underline beneath it in a document?

// Confirm the underline state of a text run to decide whether further formatting is needed in a document.

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
textPr.SetUnderline(true);
paragraph.AddElement(run);
paragraph = Api.CreateParagraph();
let underline = textPr.GetUnderline();
paragraph.AddText("Underline property: " + underline);
doc.Push(paragraph);