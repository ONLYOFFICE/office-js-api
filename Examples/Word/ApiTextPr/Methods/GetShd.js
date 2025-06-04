// This example shows how to find out the shading type of the text.

// Get the shading of the text and display it in the document.

// How to know the text shading type.

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
textPr.SetShd("clear", 255, 111, 61);
paragraph.AddElement(run);
paragraph = Api.CreateParagraph();
let color = textPr.GetShd();
let type = color.GetClassType();
paragraph.AddText("Shading type: " + type);
doc.Push(paragraph);