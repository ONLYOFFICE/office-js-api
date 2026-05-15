// Determine whether a run of text is formatted as italic in a document.

// How do I check if a piece of text has italic formatting applied in a document?

// Verify whether slanted text style is currently enabled for a text run in a document.

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
textPr.SetItalic(true);
paragraph.AddElement(run);
paragraph = Api.CreateParagraph();
let italic = textPr.GetItalic();
paragraph.AddText("Italic property: " + italic);
doc.Push(paragraph);