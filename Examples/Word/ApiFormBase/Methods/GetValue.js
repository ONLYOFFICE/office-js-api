// Get the current value of a form using the unified value interface.

// The GetValue method returns the form's current value regardless of its specific type.

// Read the form value after setting it and display the result in a new paragraph.

let doc = Api.GetDocument();
let textForm = Api.CreateTextForm({"key": "Name", "tip": "Enter your name", "required": true, "placeholder": "Your name"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(textForm);
textForm.SetValue("Jane Doe");
let value = textForm.GetValue();
paragraph = Api.CreateParagraph();
paragraph.AddText("Form value: " + value);
doc.Push(paragraph);
