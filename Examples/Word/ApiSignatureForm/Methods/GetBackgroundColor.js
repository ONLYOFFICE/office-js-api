// Set and get the background color of the current form in a document.

// How to get the background color for a signature form?

// Get the background color and display the result in a document.

let doc = Api.GetDocument();

const signatureForm = Api.CreateSignatureForm({
	'key': 'Signature',
	'tip': 'Please sign here',
	'placeholder': 'Signature',
});

const themeColor = Api.RGB(0, 255, 255);
signatureForm.SetBackgroundColor(themeColor);
const backgroundColor = signatureForm.GetBackgroundColor();

let paragraph = doc.GetElement(0);
paragraph.AddText('Background color HEX: ' + backgroundColor.GetHex());
paragraph.AddLineBreak();
paragraph.AddElement(signatureForm);