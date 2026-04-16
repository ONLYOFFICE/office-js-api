// Delete the signature form.

// How do I delete in a document?

// Delete using a signature form object.

const doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText('Original signature form: ');

const signatureForm = Api.CreateSignatureForm({
	'key': 'Signature',
	'tip': 'Please sign here',
	'placeholder': 'Signature',
});
paragraph.AddElement(signatureForm);

paragraph = Api.CreateParagraph();
paragraph.AddText('Copy of the form: ');
doc.Push(paragraph);

const signatureFormCopy = signatureForm.Copy();
paragraph.AddElement(signatureFormCopy);

signatureForm.Delete();

paragraph = Api.CreateParagraph();
paragraph.AddText('The original signature form has been deleted, but the copy remains.');
doc.Push(paragraph);