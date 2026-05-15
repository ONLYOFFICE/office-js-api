// Retrieve the last element of a document.

// How do I access the final paragraph or element in a document?

// Apply bold formatting to the closing section without knowing the total element count in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is a sample text №1.");
paragraph = Api.CreateParagraph();
paragraph.AddText("This is a sample text №2.");
doc.Push(paragraph);
let element = doc.Last();
element.SetBold(true);