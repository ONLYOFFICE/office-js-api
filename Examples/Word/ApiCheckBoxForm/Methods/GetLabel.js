// Read the visible label text attached to a checkbox form in a document.

// How do I retrieve the label displayed next to a checkbox form in a document?

// Confirm the descriptive label of a checkbox before presenting it to users in a document.

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