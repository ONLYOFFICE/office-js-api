// This example shows how to get the contextual spacing value of the current paragraph.

// Get the contextual spacing of the paragraph and display it in the document.

// How to get the contextual spacing of the ApiParaPr object.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let paraPr = paragraph.GetParaPr();
paraPr.SetContextualSpacing(true);
paragraph.AddText("This is a paragraph with contextual spacing enabled.");
let contextualSpacing = paraPr.GetContextualSpacing();
let paragraph2 = Api.CreateParagraph();
paragraph2.AddText("Contextual spacing: " + contextualSpacing);
doc.Push(paragraph2);
