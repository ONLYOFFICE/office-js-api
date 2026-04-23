// Set the checked state of a checkbox form in a document.

// The SetValue method accepts a boolean: true to check the box, false to uncheck it.

// Create a checkbox form and mark it as checked using SetValue.

let doc = Api.GetDocument();
let checkBoxForm = Api.CreateCheckBoxForm({"key": "Agreement", "tip": "I agree to the terms", "required": true, "placeholder": "Agreement"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(checkBoxForm);
paragraph.AddText(" I agree to the terms");
checkBoxForm.SetValue(true);
