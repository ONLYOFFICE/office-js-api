// This example shows how to find out the position of the text.

// Get the location index of the text properties.

// How to know the text position.

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