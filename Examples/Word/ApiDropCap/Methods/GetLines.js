// Read the number of lines a drop cap spans in a document.

// How do I find out how many lines the drop cap of a paragraph drops down in a document?

// Retrieve the line count that the drop cap of a paragraph occupies in a document.

const doc = Api.GetDocument();
const paragraph = Api.CreateParagraph();
paragraph.AddText('Once upon a time, there was a paragraph that started with a large decorative letter.');
doc.Push(paragraph);
const dropCap = paragraph.SetDropCap('drop');
dropCap.SetLines(3);
const lines = dropCap.GetLines();
const result = Api.CreateParagraph();
result.AddText('The drop cap spans ' + lines + ' lines');
doc.Push(result);
