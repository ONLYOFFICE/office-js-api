// This example shows how to delete the checkbox form.
const doc = Api.GetDocument();
const checkBoxForm = Api.CreateCheckBoxForm({
	'key': 'Marital status',
	'tip': 'Specify your marital status',
	'placeholder': 'Marital status',
	'radio': true
});
let paragraph = doc.GetElement(0);
paragraph.AddElement(checkBoxForm);
paragraph.AddText(' Married');
let copyCheckBoxForm = checkBoxForm.Copy();
paragraph.AddLineBreak();
paragraph.AddElement(copyCheckBoxForm);
paragraph.AddText(' Single');
checkBoxForm.Delete();