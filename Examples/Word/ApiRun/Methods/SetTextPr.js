// Apply a set of formatting properties to a text run in a document.

// How do I change the font size and weight of a text run in a document?

// Style a text run with custom formatting choices such as size and boldness in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let run = Api.CreateRun();
run.AddText("This is just a sample text with the font size set to 30 and the font weight set to bold.");
paragraph.AddElement(run);
let textPr = Api.CreateTextPr();
textPr.SetFontSize(30);
textPr.SetBold(true);
run.SetTextPr(textPr);