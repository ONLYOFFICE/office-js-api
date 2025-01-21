// This example shows how to get the spacing after value of the current paragraph.
let document = Api.GetDocument();
let paragraph1 = document.GetElement(0);
let paraPr = paragraph1.GetParaPr();
paraPr.SetSpacingAfter(1440);
paragraph1.AddText("This is an example of setting a space after a paragraph. ");
paragraph1.AddText("The second paragraph will have an offset of one inch from the top. ");
paragraph1.AddText("This is due to the fact that the first paragraph has this offset enabled.");
let paragraph2 = Api.CreateParagraph();
paragraph2.AddText("This is the second paragraph and it is one inch away from the first paragraph.");
paragraph2.AddLineBreak();
let spacingAfter = paraPr.GetSpacingAfter();
paragraph2.AddText("Spacing after: " + spacingAfter);
document.Push(paragraph2);