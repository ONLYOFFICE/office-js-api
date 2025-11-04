// This example shows how to get the paragraph ID.

const doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText('This is the first paragraph.');

paragraph = Api.CreateParagraph();
paragraph.SetParaId(920);
paragraph.AddText('This is the second paragraph (with custom ID).');
doc.Push(paragraph);

const para1 = doc.GetElement(0);
const para2 = doc.GetElement(1);

const id1 = para1.GetParaId();
const id2 = para2.GetParaId();

paragraph = Api.CreateParagraph();
paragraph.AddText('Paragraph IDs:\n');
paragraph.AddText('First paragraph ID: ' + id1 + '\n');
paragraph.AddText('Second paragraph ID: ' + id2 + '\n');
doc.Push(paragraph);
