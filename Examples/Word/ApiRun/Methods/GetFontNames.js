// Get all font names from all elements inside the run in a document.

// How to get all font names from the text run object elements in a document.

// Get all font names from a text run as an array and display it in the worksheet.

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