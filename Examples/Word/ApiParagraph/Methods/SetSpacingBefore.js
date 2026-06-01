// Set the amount of space that appears before a paragraph in a document.

// How do I add extra space above a paragraph to separate it from the previous one in a document?

// Push a paragraph down from the preceding content by adjusting its top gap in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is an example of setting a space before a paragraph. ");
paragraph.AddText("The second paragraph will have an offset of one inch from the top. ");
paragraph.AddText("This is due to the fact that the second paragraph has this offset enabled.");
paragraph = Api.CreateParagraph();
paragraph.AddText("This is the second paragraph and it is one inch away from the first paragraph.");
paragraph.SetSpacingBefore(1440);
doc.Push(paragraph);