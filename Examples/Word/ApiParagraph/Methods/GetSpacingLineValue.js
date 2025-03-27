// This example shows how to get the paragraph line spacing value.
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.SetSpacingLine(3 * 240, "auto");
paragraph.AddText("Paragraph 1. Spacing: 3 times of a common paragraph line spacing.");
paragraph.AddLineBreak();
paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
paragraph.AddLineBreak();
let spacingLineValue = paragraph.GetSpacingLineValue();
paragraph.AddText("Spacing line value: " + spacingLineValue);