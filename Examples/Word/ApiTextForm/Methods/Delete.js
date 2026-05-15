// Remove a text input field entirely from a document.

// How do I permanently take out a text field while keeping its copy in a document?

// Erase a specific text entry field without affecting other fields in a document.

const doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText('Original text form: ');

const textForm = Api.CreateTextForm({
	'key': 'Personal information',
	'tip': 'Enter your first name',
	'placeholder': 'First name',
});
paragraph.AddElement(textForm);

paragraph = Api.CreateParagraph();
paragraph.AddText('Copy of the form: ');
doc.Push(paragraph);

const textFormCopy = textForm.Copy();
paragraph.AddElement(textFormCopy);

textForm.Delete();

paragraph = Api.CreateParagraph();
paragraph.AddText('The original text form has been deleted, but the copy remains.');
doc.Push(paragraph);