// This example shows how to get all font names from all elements inside the run.
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let run = Api.CreateRun();
run.SetFontFamily("Calibri Light");
run.AddText("This is just a sample text.");
paragraph.AddElement(run);
let fontNames = run.GetFontNames();
paragraph = Api.CreateParagraph();
paragraph.AddText("Run font names: ");
paragraph.AddLineBreak();
for (let i = 0; i < fontNames.length; i++) {
	paragraph.AddText(fontNames[i]);
	paragraph.AddLineBreak();
}
doc.Push(paragraph);