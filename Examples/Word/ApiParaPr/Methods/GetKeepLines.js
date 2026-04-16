// Get the keep lines value of the current paragraph in a document.

// Get the keep lines value of the paragraph and display it in the document.

// How to get the keep lines value of the paragraph properties object in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let paraPr = paragraph.GetParaPr();
paraPr.SetKeepLines(true);
paragraph.AddText("This is a paragraph with all lines kept on the same page.");
let keepLines = paraPr.GetKeepLines();
let paragraph2 = Api.CreateParagraph();
paragraph2.AddText("Keep lines: " + keepLines);
doc.Push(paragraph2);