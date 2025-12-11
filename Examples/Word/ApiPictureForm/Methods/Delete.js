// This example deletes the form.

const doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText('Original picture form: ');

const pictureForm = Api.CreatePictureForm({
	'key': 'Photo',
	'tip': 'Upload your photo',
	'placeholder': 'Photo',
});
pictureForm.SetImage(
	'https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png',
	Api.MillimetersToEmus(50),
	Api.MillimetersToEmus(50)
);
paragraph.AddElement(pictureForm);

paragraph = Api.CreateParagraph();
paragraph.AddText('Copy of the form: ');
doc.Push(paragraph);

const pictureFormCopy = pictureForm.Copy();
paragraph.AddElement(pictureFormCopy);

pictureForm.Delete();

paragraph = Api.CreateParagraph();
paragraph.AddText('The original picture form has been deleted, but the copy remains.');
doc.Push(paragraph);
