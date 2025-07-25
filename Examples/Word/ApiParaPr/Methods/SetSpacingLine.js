// This example sets the paragraph line spacing.

// How to set the size of a spacing line from a paragraph properties.

// Change a spacing line size property of a paragraph properties.

let doc = Api.GetDocument();
let myStyle1 = doc.CreateStyle("My document style #1");
let paraPr = myStyle1.GetParaPr();
paraPr.SetSpacingLine(3 * 240, "auto");
let myStyle2 = doc.CreateStyle("My document style #2");
paraPr = myStyle2.GetParaPr();
paraPr.SetSpacingLine(200, "exact");
let myStyle3 = doc.CreateStyle("My document style #3");
paraPr = myStyle3.GetParaPr();
paraPr.SetSpacingLine(400, "atLeast");
let paragraph = doc.GetElement(0);
paragraph.SetStyle(myStyle1);
paragraph.AddText("Paragraph 1. Spacing: 3 times of a common paragraph line spacing.");
paragraph.AddLineBreak();
paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes.");
paragraph = Api.CreateParagraph();
paragraph.SetStyle(myStyle2);
paragraph.AddText("Paragraph 2. Spacing: exact 10 points.");
paragraph.AddLineBreak();
paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes.");
doc.Push(paragraph);
paragraph = Api.CreateParagraph();
paragraph.SetStyle(myStyle3);
paragraph.AddText("Paragraph 3. Spacing: atLeast 20 points.");
paragraph.AddLineBreak();
paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes.");
doc.Push(paragraph);