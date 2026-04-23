// Read the background color applied to a signature field in a document.

// How do I find out what background color a signature field has in a document?

// Inspect the fill color behind a signature field to use or display the value in a document.

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