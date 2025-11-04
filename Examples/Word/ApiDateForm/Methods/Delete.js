// This example deletes the form.

const doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText('Original date form: ');

const dateForm = Api.CreateDateForm({
	'key': 'Birth date',
	'tip': 'Enter your birth date',
	'placeholder': 'Date',
	'format': 'dd.MM.yyyy',
	'lang': 'en-US'
});
paragraph.AddElement(dateForm);

paragraph = Api.CreateParagraph();
paragraph.AddText('Copy of the form: ');
doc.Push(paragraph);

const dateFormCopy = dateForm.Copy();
paragraph.AddElement(dateFormCopy);

dateForm.Delete();

paragraph = Api.CreateParagraph();
paragraph.AddText('The original date form has been deleted, but the copy remains');
doc.Push(paragraph);
