// Get the checked state of a checkbox form as a boolean value.

// The GetValue method returns true if the checkbox is checked and false otherwise.

// Check the checkbox form and then read its value to display the state.

let doc = Api.GetDocument();
let checkBoxForm = Api.CreateCheckBoxForm({"key": "Agreement", "tip": "I agree to the terms", "required": true, "placeholder": "Agreement"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(checkBoxForm);
paragraph.AddText(" I agree to the terms");
checkBoxForm.SetValue(true);
let value = checkBoxForm.GetValue();
paragraph = Api.CreateParagraph();
paragraph.AddText("Checkbox value: " + value);
doc.Push(paragraph);
