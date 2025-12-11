// This example gets the label text from the checkbox form.

// How to retrieve a label from the checkbox form.

// Get the label text from the checkbox.

let doc = Api.GetDocument();
let checkBoxForm = Api.CreateCheckBoxForm({"tip": "Select if you agree to terms", "required": true, "key" : "Terms agreement"});
checkBoxForm.SetLabel(" I agree to the terms and conditions");
let paragraph = doc.GetElement(0);
paragraph.AddElement(checkBoxForm);

// Get the label from the checkbox form
let label = checkBoxForm.GetLabel();

// Add the retrieved label text to the document
paragraph.AddLineBreak();
paragraph.AddLineBreak();
paragraph.AddText("Retrieved label: " + label);