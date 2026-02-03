// This example shows how to set and get the border color of the current form.

const doc = Api.GetDocument();

const textForm = Api.CreateTextForm({
	'key': 'Personal information',
	'tip': 'Enter your first name',
	'required': true,
	'placeholder': 'First name',
	'comb': true,
	'maxCharacters': 10,
	'cellWidth': 3,
	'multiLine': false,
	'autoFit': false
});

const rgbColor = Api.RGB(171, 205, 239);
textForm.SetBorderColor(rgbColor);
const borderColor = textForm.GetBorderColor();

const paragraph = doc.GetElement(0);
paragraph.AddText('Border color of the form below - ' + borderColor.GetHex() + '\n');
paragraph.AddElement(textForm);
