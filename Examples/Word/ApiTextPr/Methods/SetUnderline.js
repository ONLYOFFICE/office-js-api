// Underline all default text with a single line in a document.

// How do I add an underline beneath the default paragraph text in a document?

// Emphasize body text by switching on the underline formatting option in a document.

let doc = Api.GetDocument();
let textPr = doc.GetDefaultTextPr();
textPr.SetUnderline(true);
let paragraph = doc.GetElement(0);
paragraph.AddText("A sample text underlined with a single line.");