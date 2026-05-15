// Make text appear in italic style in a document.

// How do I format text to display in italics in a document?

// Emphasize words by switching the default text style to italicized letters in a document.

let doc = Api.GetDocument();
let textPr = doc.GetDefaultTextPr();
textPr.SetItalic(true);
let paragraph = doc.GetElement(0);
paragraph.AddText("A sample text with the font set to italicized letters using the text properties.");