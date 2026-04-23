// Read the contextual spacing setting from a paragraph's formatting in a document.

// How do I check whether contextual spacing is enabled for a paragraph in a document?

// Confirm the spacing behavior between same-styled paragraphs before adjusting layout.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let paraPr = paragraph.GetParaPr();
paraPr.SetContextualSpacing(true);
paragraph.AddText("This is a paragraph with contextual spacing enabled.");
let contextualSpacing = paraPr.GetContextualSpacing();
let paragraph2 = Api.CreateParagraph();
paragraph2.AddText("Contextual spacing: " + contextualSpacing);
doc.Push(paragraph2);