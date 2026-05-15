// Check whether a single strikethrough line is applied to a text run in a document.

// How do I tell if text has a line drawn through it in a document?

// Confirm the strikeout state of a text run before deciding whether to toggle it in a document.

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
textPr.SetStrikeout(true);
paragraph.AddElement(run);
paragraph = Api.CreateParagraph();
let strikeout = textPr.GetStrikeout();
paragraph.AddText("Strikeout property: " + strikeout);
doc.Push(paragraph);