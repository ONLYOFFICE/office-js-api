// Assign a unique identifier to a paragraph in a document.

// How do I give a paragraph a custom ID so it can be referenced later in a document?

// Tag a paragraph with a specific identifier and confirm it was applied in a document.

const doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText('This paragraph will have a custom ID.');

const customId = 920;
paragraph.SetParaId(customId);

paragraph = Api.CreateParagraph();
paragraph.AddText('Custom paragraph ID was set to: ' + customId);
doc.Push(paragraph);

const retrievedId = paragraph.GetParaId();
paragraph = Api.CreateParagraph();
paragraph.AddText('Retrieved paragraph ID: ' + retrievedId);
doc.Push(paragraph);