// This example specifies that any space before or after the paragraph.

// Set the contextual spacing for paragraph.

// Get the first paragraph and set the spacing for its two ends.

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