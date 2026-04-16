// Set the text properties to the current run in a document.

// How to create the new text properties and apply it to the text run in a document.

// Create a new text run and set its properties like font size, color, etc in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let run = Api.CreateRun();
run.AddText("This is just a sample text with the font size set to 30 and the font weight set to bold.");
paragraph.AddElement(run);
let textPr = Api.CreateTextPr();
textPr.SetFontSize(30);
textPr.SetBold(true);
run.SetTextPr(textPr);