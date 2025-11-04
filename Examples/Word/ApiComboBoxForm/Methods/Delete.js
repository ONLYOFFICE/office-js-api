// This example deletes the form.

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
