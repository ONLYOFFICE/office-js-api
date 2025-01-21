// This example copies the form.
let document = Api.GetDocument();
let checkBoxForm = Api.CreateCheckBoxForm({"key": "Marital status", "tip": "Specify your marital status", "required": true, "placeholder": "Marital status", "radio": true});
let paragraph = document.GetElement(0);
paragraph.AddElement(checkBoxForm);
paragraph.AddText(" Married");
let copyCheckBoxForm = checkBoxForm.Copy();
paragraph.AddLineBreak();
paragraph.AddElement(copyCheckBoxForm);
paragraph.AddText(" Single");