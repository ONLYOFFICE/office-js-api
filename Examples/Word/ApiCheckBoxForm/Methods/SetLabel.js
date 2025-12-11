// This example sets the label text to the checkbox form.

// How to add a label to the checkbox form.

// Set a label text to the checkbox.

let doc = Api.GetDocument();
let checkBoxForm = Api.CreateCheckBoxForm({"tip": "Specify your marital status", "required": true, "radio": true, "key" : "Marital status"});
checkBoxForm.SetLabel(" Married");
let paragraph = doc.GetElement(0);
paragraph.AddElement(checkBoxForm);
paragraph.AddLineBreak();
checkBoxForm = Api.CreateCheckBoxForm({"tip": "Specify your marital status", "required": true, "radio" : true, "key" : "Marital status"});
checkBoxForm.SetLabel(" Single");
paragraph.AddElement(checkBoxForm);
