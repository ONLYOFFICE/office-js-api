// This example demonstrates how to add text to complex form.
let doc = Api.GetDocument();
let complexForm = Api.CreateComplexForm({"key": "Complex", "tip": "Insert here other forms", "required": true, "placeholder": "Complex form"});
complexForm.AddText('Word');
let paragraph = doc.GetElement(0);
paragraph.AddElement(complexForm);