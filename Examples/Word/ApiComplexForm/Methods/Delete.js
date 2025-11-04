// This example deletes the form.

const doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText('Original complex form: ');

const complexForm = Api.CreateComplexForm({
	'key': 'Complex form',
	'tip': 'Enter data',
	'placeholder': 'Complex form'
});
paragraph.AddElement(complexForm);

paragraph = Api.CreateParagraph();
paragraph.AddText('Copy of the form: ');
doc.Push(paragraph);

const complexFormCopy = complexForm.Copy();
paragraph.AddElement(complexFormCopy);

complexForm.Delete();

paragraph = Api.CreateParagraph();
paragraph.AddText('The original complex form has been deleted, but the copy remains.');
doc.Push(paragraph);
