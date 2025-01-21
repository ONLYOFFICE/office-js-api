// This example shows how to get the paragraph line spacing rule.
let document = Api.GetDocument();
let paragraph = document.GetElement(0);
let paraPr = paragraph.GetParaPr();
paraPr.SetSpacingLine(3 * 240, "auto");
paragraph.AddText("Paragraph 1. Spacing: 3 times of a common paragraph line spacing.");
paragraph.AddLineBreak();
paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
paragraph.AddLineBreak();
let spacingLineRule = paraPr.GetSpacingLineRule();
paragraph.AddText("Spacing line rule: " + spacingLineRule);