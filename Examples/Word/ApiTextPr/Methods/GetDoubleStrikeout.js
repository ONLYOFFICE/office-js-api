// This example finds out whether a text has the double strikeout property set.

// How to know whether a text is crossed by two horizontal lines.

// Retrieve text properties of the form to find out whether it is double stroke out.

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
textPr.SetDoubleStrikeout(true);
paragraph.AddElement(run);
paragraph = Api.CreateParagraph();
let doubleStrikeout = textPr.GetDoubleStrikeout();
paragraph.AddText("Double strikeout property: " + doubleStrikeout);
doc.Push(paragraph);