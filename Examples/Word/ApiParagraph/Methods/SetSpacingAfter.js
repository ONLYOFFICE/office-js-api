// Set the amount of space that appears after a paragraph in a document.

// How do I add extra space below a paragraph to separate it from the next one in a document?

// Control the gap that follows a paragraph to improve vertical rhythm in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is an example of setting a space after a paragraph. ");
paragraph.AddText("The second paragraph will have an offset of one inch from the top. ");
paragraph.AddText("This is due to the fact that the first paragraph has this offset enabled.");
paragraph.SetSpacingAfter(1440);
paragraph = Api.CreateParagraph();
paragraph.AddText("This is the second paragraph and it is one inch away from the first paragraph.");
doc.Push(paragraph);