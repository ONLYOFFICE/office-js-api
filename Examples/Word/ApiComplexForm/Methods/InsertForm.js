// This example demonstrates how to insert a form element into a complex form.
let doc = Api.GetDocument();
let complexForm = Api.CreateComplexForm({"key": "Complex", "tip": "Insert here other forms", "required": true, "placeholder": "Complex form"});
complexForm.InsertForm(Api.CreateCheckBoxForm());
let paragraph = doc.GetElement(0);
paragraph.AddElement(complexForm);