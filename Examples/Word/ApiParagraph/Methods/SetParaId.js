// Set the paragraph ID in a document.

// How to set para id for a paragraph in a document?

// Set para id and display the result in a document.

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