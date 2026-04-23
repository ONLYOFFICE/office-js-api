// Read the named style attached to a text run in a document.

// How do I find out which style is applied to a piece of text in a document?

// Retrieve the style name from a text run to verify its formatting origin in a document.

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
paragraph.AddElement(run);
paragraph = Api.CreateParagraph();
let style = textPr.GetStyle();
paragraph.AddText("Style: " + style.GetName());
doc.Push(paragraph);