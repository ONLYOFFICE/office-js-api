// This example shows how to get all font names from all elements inside the paragraph.
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let run = Api.CreateRun();
run.AddText("This is just a sample text.");
paragraph.AddElement(run);
run = Api.CreateRun();
run.SetFontFamily("Calibri Light");
run.AddText("This is a text run with the font family set to 'Calibri Light'.");
paragraph.AddElement(run);
let fonts = paragraph.GetFontNames();
let newParagraph = Api.CreateParagraph();
newParagraph.AddText("Fonts from previous paragraph: " + fonts.join(", "));
doc.AddElement(1, newParagraph);


