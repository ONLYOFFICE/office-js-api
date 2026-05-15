// Read the character spacing applied to a text run in a document.

// How do I check how much space is added between characters in a document?

// Inspect the spacing value set on a text run to verify its letter-spacing in a document.

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
textPr.SetSpacing(80);
paragraph.AddElement(run);
paragraph = Api.CreateParagraph();
let spacing = textPr.GetSpacing();
paragraph.AddText("Text spacing: " + spacing);
doc.Push(paragraph);