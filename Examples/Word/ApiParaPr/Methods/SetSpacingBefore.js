// This example sets the spacing before the current paragraph.
let doc = Api.GetDocument();
let myStyle = doc.CreateStyle("My document style");
let paraPr = myStyle.GetParaPr();
paraPr.SetSpacingBefore(1440);
let paragraph = doc.GetElement(0);
paragraph.AddText("This is an example of setting a space before a paragraph. ");
paragraph.AddText("The second paragraph will have an offset of one inch from the top. ");
paragraph.AddText("This is due to the fact that the second paragraph has this offset enabled.");
paragraph = Api.CreateParagraph();
paragraph.AddText("This is the second paragraph and it is one inch away from the first paragraph.");
paragraph.SetStyle(myStyle);
doc.Push(paragraph);