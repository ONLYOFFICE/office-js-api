// Read the line spacing value applied to a paragraph and display it in a document.

// How do I get the line spacing value of a paragraph in a document?

// Confirm the exact spacing amount by printing the numeric line spacing value after setting triple-line spacing in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let paraPr = paragraph.GetParaPr();
paraPr.SetSpacingLine(3 * 240, "auto");
paragraph.AddText("Paragraph 1. Spacing: 3 times of a common paragraph line spacing.");
paragraph.AddLineBreak();
paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
paragraph.AddLineBreak();
let spacingLineValue = paraPr.GetSpacingLineValue();
paragraph.AddText("Spacing line value: " + spacingLineValue);