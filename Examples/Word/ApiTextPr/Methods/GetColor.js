// Read the color applied to a run of text in a document.

// How do I find out what color a piece of text is set to in a document?

// Check the exact color value assigned to styled text in a document.

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
textPr.SetColor(Api.HexColor('#FF6F3D'));
paragraph.AddElement(run);
paragraph = Api.CreateParagraph();
let color = textPr.GetColor();
let type = color.GetClassType();
paragraph.AddText("Color type: " + type);
paragraph.SetColor(color);
doc.Push(paragraph);