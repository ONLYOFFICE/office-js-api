// Read whether all lines of a paragraph are kept together on one page in a document.

// How do I check if a paragraph is set to keep all its lines on the same page in a document?

// Verify the keep-lines setting before modifying pagination rules for multi-line paragraphs.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let paraPr = paragraph.GetParaPr();
paraPr.SetKeepLines(true);
paragraph.AddText("This is a paragraph with all lines kept on the same page.");
let keepLines = paraPr.GetKeepLines();
let paragraph2 = Api.CreateParagraph();
paragraph2.AddText("Keep lines: " + keepLines);
doc.Push(paragraph2);