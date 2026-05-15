// Set the value of a form field using the unified SetValue interface.

// The SetValue method provides a type-agnostic way to set form values across all form types.

// Set the form value and add the form to a document paragraph.

let doc = Api.GetDocument();
let textForm = Api.CreateTextForm({"key": "Name", "tip": "Enter your name", "required": true, "placeholder": "Your name"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(textForm);
textForm.SetValue("Jane Doe");
