// Remove a combo box form field from a document.

// How do I permanently delete a combo box form field in a document?

// Keep a copy of a form field and delete the original to leave only the duplicate in a document.

const doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText('Original combo box form: ');

const comboBoxForm = Api.CreateComboBoxForm({
	'key': 'Personal information',
	'tip': 'Choose your country',
	'placeholder': 'Country',
	'editable': false,
	'autoFit': false,
	'items': ['Latvia', 'USA', 'UK']
});
paragraph.AddElement(comboBoxForm);

paragraph = Api.CreateParagraph();
paragraph.AddText('Copy of the form: ');
doc.Push(paragraph);

const comboBoxFormCopy = comboBoxForm.Copy();
paragraph.AddElement(comboBoxFormCopy);

comboBoxForm.Delete();

paragraph = Api.CreateParagraph();
paragraph.AddText('The original combo box form has been deleted, but the copy remains.');
doc.Push(paragraph);