// Control whether extra spacing is added between paragraphs of the same style in a document.

// How do I remove or keep extra space between adjacent paragraphs of the same style in a document?

// Adjust spacing behavior so that matching paragraphs sit closer together or farther apart in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is a paragraph with contextual spacing set to 'false'.");
paragraph.SetContextualSpacing(false);
paragraph = Api.CreateParagraph();
paragraph.AddText("This is a paragraph with contextual spacing set to 'false'.");
paragraph.SetContextualSpacing(false);
doc.Push(paragraph);
paragraph = Api.CreateParagraph();
paragraph.AddText("This is a paragraph with contextual spacing set to 'false'.");
paragraph.SetContextualSpacing(false);
doc.Push(paragraph);
paragraph = Api.CreateParagraph();
paragraph.AddText("This is a paragraph with contextual spacing set to 'true'.");
paragraph.SetContextualSpacing(true);
doc.Push(paragraph);
paragraph = Api.CreateParagraph();
paragraph.AddText("This is a paragraph with contextual spacing set to 'true'.");
paragraph.SetContextualSpacing(true);
doc.Push(paragraph);