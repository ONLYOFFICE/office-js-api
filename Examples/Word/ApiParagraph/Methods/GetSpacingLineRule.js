// Read the line spacing rule applied to a paragraph in a document.

// How do I find out which line spacing rule a paragraph uses in a document?

// Display the spacing rule name alongside paragraph text to confirm the setting in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.SetSpacingLine(3 * 240, "auto");
paragraph.AddText("Paragraph 1. Spacing: 3 times of a common paragraph line spacing.");
paragraph.AddLineBreak();
paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
paragraph.AddLineBreak();
let spacingLineRule = paragraph.GetSpacingLineRule();
paragraph.AddText("Spacing line rule: " + spacingLineRule);