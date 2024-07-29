// This example shows how to get the spacing before value of the paragraph.
var oDocument = Api.GetDocument();
var oParagraph1 = oDocument.GetElement(0);
oParagraph1.AddText("This is an example of setting a space before a paragraph. ");
oParagraph1.AddText("The second paragraph will have an offset of one inch from the top. ");
oParagraph1.AddText("This is due to the fact that the second paragraph has this offset enabled.");
var oParagraph2 = Api.CreateParagraph();
oParagraph2.AddText("This is the second paragraph and it is one inch away from the first paragraph.");
oParagraph2.SetSpacingBefore(1440);
oParagraph2.AddLineBreak();
var nSpacingBefore = oParagraph2.GetSpacingBefore();
oParagraph2.AddText("Spacing before: " + nSpacingBefore);
oDocument.Push(oParagraph2);