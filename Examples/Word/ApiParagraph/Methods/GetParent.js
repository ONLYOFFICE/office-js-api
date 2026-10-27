// Access the document content that contains a paragraph.

// The parent is the document content that holds the paragraph.

// Navigate from a paragraph up to its parent and count the elements the parent holds.

let doc = Api.GetDocument();
let paragraph = Api.CreateParagraph();
paragraph.AddText("This is a sample paragraph.");
doc.Push(paragraph);
let parent = paragraph.GetParent();
let report = Api.CreateParagraph();
report.AddText("The parent holds " + parent.GetElementsCount() + " elements.");
doc.Push(report);
