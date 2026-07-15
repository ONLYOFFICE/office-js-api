// Get the class type of a drop cap object in a document.

// How do I determine the class type of a drop cap object in a document?

// Read the "dropCap" class type from a drop cap created for a paragraph in a document.

const doc = Api.GetDocument();
const paragraph = Api.CreateParagraph();
paragraph.AddText('Once upon a time, there was a paragraph that started with a large decorative letter.');
doc.Push(paragraph);
const dropCap = paragraph.SetDropCap('drop');
const classType = dropCap.GetClassType();
const result = Api.CreateParagraph();
result.AddText('The ApiDropCap class type: ' + classType);
doc.Push(result);
