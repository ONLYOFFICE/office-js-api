// Check whether the current paragraph has no content elements.

// Verify that a newly created paragraph reports as empty.

// Confirm the empty state changes once text is added.

let doc = Api.GetDocument();
let paragraph = Api.CreateParagraph();
let emptyBefore = paragraph.IsEmpty();
paragraph.AddText("This is a sample text.");
let emptyAfter = paragraph.IsEmpty();
doc.Push(paragraph);
let resultParagraph = Api.CreateParagraph();
resultParagraph.AddText("The paragraph was empty before adding text: " + emptyBefore + ". After adding text: " + emptyAfter + ".");
doc.Push(resultParagraph);
